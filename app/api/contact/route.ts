import { NextResponse } from "next/server";
import { google } from "googleapis";

// Helper function to escape HTML special characters to prevent injection in emails
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Helper to format submission date nicely in Indian Standard Time (IST / Asia/Kolkata)
// e.g. "2026-10-10  21:28"
function formatSubmissionDate(date: Date = new Date()): string {
  const timeZone = process.env.TIMEZONE || "Asia/Kolkata";
  try {
    const formatter = new Intl.DateTimeFormat("en-IN", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });

    const parts = formatter.formatToParts(date);
    const getPart = (type: string) => parts.find((p) => p.type === type)?.value || "";

    const year = getPart("year");
    const month = getPart("month");
    const day = getPart("day");
    const hour = getPart("hour");
    const minute = getPart("minute");

    return `${year}-${month}-${day}  ${hour}:${minute}`;
  } catch {
    return date.toISOString().replace("T", "  ").substring(0, 18);
  }
}

// Shared helper to initialize Google Sheets API client with JWT auth
function getSheets() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sheetId = process.env.SHEET_ID;

  if (!clientEmail || !privateKey || !sheetId) {
    return null;
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  return { sheets, sheetId };
}

// Strip line breaks, trim, and clip string to maxLen (default 500 chars)
function clipValue(val: unknown, maxLen = 500): string {
  if (val === null || val === undefined) return "";
  const str = typeof val === "string" ? val : String(val);
  return str.replace(/[\r\n]+/g, " ").trim().substring(0, maxLen);
}

// Append flagged submission to the "Spam" tab in Google Sheets
async function logSpam(reason: string, body: Record<string, unknown>) {
  try {
    const sheetsInstance = getSheets();
    if (!sheetsInstance) {
      console.error("[CONTACT API] ✖ Cannot log spam: missing Google Sheets credentials");
      return;
    }

    const { sheets, sheetId } = sheetsInstance;
    const subMarketing = Boolean(body.marketing);
    const elapsedVal = typeof body.elapsed === "number" ? `${body.elapsed}` : clipValue(body.elapsed);

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Spam!A:I",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            reason,
            clipValue(body.name),
            clipValue(body.email),
            clipValue(body.company),
            clipValue(body.service),
            clipValue(body.requirements),
            subMarketing ? "Yes" : "No",
            elapsedVal,
          ],
        ],
      },
    });
    console.log("[CONTACT API] ✔ Spam submission logged to 'Spam' tab successfully");
  } catch (err) {
    console.error("[CONTACT API] ✖ Failed to log spam to Google Sheet:", err instanceof Error ? err.message : err);
  }
}

export async function POST(req: Request) {
  console.log("\n[CONTACT API] ▶ Received submission");
  try {
    const body = await req.json();
    const { name, email, company, service, requirements, marketing, honeypot, elapsed } = body;
    console.log("[CONTACT API] Fields received:", {
      name: !!name,
      email: !!email,
      company: !!company,
      service,
      marketing,
      honeypot_present: Boolean(honeypot),
      elapsed,
    });

    // 1. Bot spam checks: collect all triggered reasons
    const spamReasons: string[] = [];
    if (honeypot) {
      spamReasons.push("honeypot filled");
    }
    if (typeof elapsed !== "number" || Number.isNaN(elapsed)) {
      spamReasons.push("missing or invalid elapsed");
    } else if (elapsed < 2000) {
      spamReasons.push(`too fast (${elapsed}ms)`);
    }

    if (spamReasons.length > 0) {
      const reason = spamReasons.join(", ");
      console.warn("Possible bot blocked", { honeypot: !!honeypot, elapsed, reason });
      await logSpam(reason, body);
      return NextResponse.json(
        { success: true, message: "Thank you! Your message has been sent successfully." },
        { status: 200 }
      );
    }

    const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

    // 2. Validate required fields
    if (
      !name || typeof name !== "string" || !name.trim() ||
      !email || typeof email !== "string" || !email.trim() ||
      !company || typeof company !== "string" || !company.trim() ||
      !service || typeof service !== "string" || !service.trim() ||
      !requirements || typeof requirements !== "string" || !requirements.trim()
    ) {
      return NextResponse.json(
        { error: "All fields are required. Please fill in all fields before submitting." },
        { status: 400 }
      );
    }

    const cleanName = oneLine(name);
    const cleanEmail = oneLine(email);
    const cleanCompany = oneLine(company);
    const cleanRequirements = requirements.trim();
    const subMarketing = Boolean(marketing);
    const submissionDate = formatSubmissionDate(new Date());

    // Length limit checks to prevent flooding
    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanCompany.length > 150 ||
      cleanRequirements.length > 3000
    ) {
      return NextResponse.json({ error: "Input too long." }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@<>,;]+@[^\s@<>,;]+\.[^\s@<>,;]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Validate service against allowed options (safe from prototype pollution / inherited keys)
    const SERVICE_OPTIONS: Record<string, string> = {
      "wind-installation": "1. Wind Turbine Installation & Execution",
      "captive-hybrid": "2. Commercial & Industrial (C&I) Captive Hybrid Power",
      "maintenance-repowering": "3. Operations, Maintenance & Repowering",
    };

    const resolvedService = Object.prototype.hasOwnProperty.call(SERVICE_OPTIONS, service)
      ? SERVICE_OPTIONS[service]
      : null;

    if (!resolvedService) {
      return NextResponse.json(
        { error: "Please select a valid service." },
        { status: 400 }
      );
    }

    const cleanService = oneLine(resolvedService);

    let sheetSaved = false;
    let emailSent = false;

    // 3. Save to Google Sheets (Sheet1)
    const sheetsInstance = getSheets();
    if (!sheetsInstance) {
      console.error("[CONTACT API] ✖ Missing Google Sheets credentials!");
    } else {
      try {
        const { sheets, sheetId } = sheetsInstance;
        await sheets.spreadsheets.values.append({
          spreadsheetId: sheetId,
          range: "Sheet1!A:G",
          valueInputOption: "RAW",
          requestBody: {
            values: [
              [
                cleanName,
                cleanEmail,
                cleanCompany,
                cleanService,
                cleanRequirements,
                subMarketing ? "Yes" : "No",
                submissionDate,
              ],
            ],
          },
        });
        sheetSaved = true;
        console.log("[CONTACT API] ✔ Sheet row appended successfully");
      } catch (sheetError) {
        console.error("[CONTACT API] ✖ Google Sheets error:", sheetError instanceof Error ? sheetError.message : sheetError);
      }
    }

    // 4. Send notification email via Brevo REST API
    const brevoApiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.SENDER_EMAIL;
    const notifyEmail = process.env.NOTIFY_EMAIL;

    console.log("[CONTACT API] Brevo env check:", {
      hasApiKey: !!brevoApiKey,
      senderEmail,
      notifyEmail,
    });

    if (brevoApiKey && senderEmail && notifyEmail) {
      try {
        const emailHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f9fa; margin: 0; padding: 24px; color: #1e293b; }
              .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 14px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.04); }
              .header { background: #0B2735; padding: 24px 28px; }
              .header h2 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
              .header p { margin: 6px 0 0 0; color: #AEF977; font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }
              .content { padding: 28px; }
              .field { margin-bottom: 20px; }
              .label { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; }
              .value { font-size: 15px; color: #0f172a; font-weight: 500; line-height: 1.5; }
              .box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 16px; margin-top: 4px; }
              .footer { padding: 18px 28px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <h2>New Contact Form Submission</h2>
                <p>Vynentra Website Lead</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Full Name</div>
                  <div class="value">${escapeHtml(cleanName)}</div>
                </div>
                <div class="field">
                  <div class="label">Work Email</div>
                  <div class="value"><a href="mailto:${escapeHtml(cleanEmail)}" style="color: #087589; text-decoration: none;">${escapeHtml(cleanEmail)}</a></div>
                </div>
                <div class="field">
                  <div class="label">Company</div>
                  <div class="value">${escapeHtml(cleanCompany)}</div>
                </div>
                <div class="field">
                  <div class="label">What do you need help with?</div>
                  <div class="value">${escapeHtml(cleanService)}</div>
                </div>
                <div class="field">
                  <div class="label">Requirements</div>
                  <div class="value box">${escapeHtml(cleanRequirements).replace(/\n/g, "<br/>")}</div>
                </div>
                <div class="field">
                  <div class="label">Sign up for marketing emails</div>
                  <div class="value">${subMarketing ? "Yes" : "No"}</div>
                </div>
              </div>
              <div class="footer">
                Submitted on ${submissionDate} IST
              </div>
            </div>
          </body>
          </html>
        `;

        const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "accept": "application/json",
            "content-type": "application/json",
            "api-key": brevoApiKey,
          },
          body: JSON.stringify({
            sender: {
              name: "Vynentra Website",
              email: senderEmail,
            },
            to: [
              {
                email: notifyEmail,
                name: "Vynentra Admin",
              },
            ],
            replyTo: {
              email: cleanEmail,
              name: cleanName,
            },
            subject: `New Lead: ${cleanName} from ${cleanCompany}`,
            htmlContent: emailHtml,
          }),
        });

        if (brevoResponse.ok) {
          emailSent = true;
          console.log("[CONTACT API] ✔ Notification email sent successfully");
        } else {
          const errorDetails = await brevoResponse.text();
          console.error("[CONTACT API] ✖ Brevo API error:", brevoResponse.status, errorDetails);
        }
      } catch (emailError) {
        console.error("[CONTACT API] ✖ Brevo fetch error:", emailError instanceof Error ? emailError.message : emailError);
      }
    } else {
      console.warn("Brevo credentials (BREVO_API_KEY, SENDER_EMAIL, or NOTIFY_EMAIL) not fully set. Skipped email notification.");
    }

    // Fail only if BOTH sheets and email failed
    console.log("[CONTACT API] Result:", { sheetSaved, emailSent });
    if (!sheetSaved && !emailSent) {
      console.error("[CONTACT API] ✖ BOTH sheet and email failed — returning 500");
      return NextResponse.json(
        { error: "Failed to record your submission. Please try again later." },
        { status: 500 }
      );
    }

    console.log("[CONTACT API] ✔ Submission complete — returning 200");
    return NextResponse.json(
      { success: true, message: "Thank you! Your message has been sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error in contact API route:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
