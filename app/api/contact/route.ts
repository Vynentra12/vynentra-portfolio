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
    const targetSheetId = process.env.SHEET_ID;
    const googleSheetUrl = targetSheetId
      ? `https://docs.google.com/spreadsheets/d/${targetSheetId}/edit`
      : "";

    console.log("[CONTACT API] Brevo env check:", {
      hasApiKey: !!brevoApiKey,
      senderEmail,
      notifyEmail,
      hasSheetUrl: !!googleSheetUrl,
    });

    if (brevoApiKey && senderEmail && notifyEmail) {
      try {
        const emailHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Lead Notification</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #F4F6F8; margin: 0; padding: 28px 12px; color: #0B2735; -webkit-font-smoothing: antialiased; }
              .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 20px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 8px 30px rgba(14,47,62,0.06); }
              .header { background: #0E2F3E; padding: 32px 32px 28px 32px; border-bottom: 1px solid rgba(255,255,255,0.08); }
              .header-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; }
              .logo { font-size: 24px; font-weight: 800; letter-spacing: -0.035em; color: #ffffff; text-decoration: none; line-height: 1; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
              .badge { display: inline-block; padding: 4px 12px; background: rgba(174, 249, 119, 0.15); border: 1px solid rgba(174, 249, 119, 0.35); border-radius: 9999px; color: #AEF977; font-size: 10.5px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
              .header h2 { margin: 0; color: #ffffff; font-size: 22px; font-weight: 600; letter-spacing: -0.02em; line-height: 1.25; }
              .header p { margin: 6px 0 0 0; color: rgba(255, 255, 255, 0.72); font-size: 13px; font-weight: 400; line-height: 1.5; }
              .content { padding: 32px; }
              .field { margin-bottom: 20px; }
              .label { font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 5px; }
              .value { font-size: 15px; color: #0B2735; font-weight: 600; line-height: 1.45; }
              .message-box { background: #F4F6F8; border: 1px solid #E2E8F0; border-radius: 14px; padding: 16px 18px; margin-top: 6px; color: #1E293B; font-size: 14.5px; line-height: 1.65; font-weight: 400; }
              .actions-section { margin-top: 28px; padding-top: 24px; border-top: 1px solid #E2E8F0; }
              .btn-primary { display: inline-block; padding: 13px 26px; background-color: #AEF977; color: #0B2735 !important; border-radius: 9999px; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; text-align: center; }
              .btn-secondary { display: inline-block; padding: 13px 26px; background-color: #0E2F3E; color: #ffffff !important; border-radius: 9999px; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; text-align: center; margin-left: 10px; }
              .sheet-card { background: #F4F6F8; border: 1px solid #E2E8F0; border-radius: 14px; padding: 14px 18px; margin-top: 20px; }
              .sheet-card-title { font-size: 11px; font-weight: 700; color: #087589; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; }
              .sheet-card-url { font-size: 12.5px; color: #087589; text-decoration: underline; word-break: break-all; font-weight: 500; display: block; line-height: 1.5; }
              .footer { padding: 20px 32px; background: #F4F6F8; border-top: 1px solid #E2E8F0; font-size: 12px; color: #64748B; text-align: center; line-height: 1.6; }
              .footer strong { color: #0B2735; }
            </style>
          </head>
          <body>
            <div class="card">
              <div class="header">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom: 16px;">
                  <tr>
                    <td align="left">
                      <span class="logo" style="font-size: 24px; font-weight: 800; letter-spacing: -0.035em; color: #ffffff;">vynentra</span>
                    </td>
                    <td align="right">
                      <span class="badge" style="display: inline-block; padding: 4px 12px; background-color: rgba(174, 249, 119, 0.15); border: 1px solid rgba(174, 249, 119, 0.35); border-radius: 9999px; color: #AEF977; font-size: 10.5px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;">LEAD NOTIFICATION</span>
                    </td>
                  </tr>
                </table>
                <h2 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 600; letter-spacing: -0.02em;">New Contact Form Submission</h2>
                <p style="margin: 6px 0 0 0; color: rgba(255, 255, 255, 0.72); font-size: 13px;">A new renewable energy inquiry was submitted on the Vynentra website contact desk.</p>
              </div>

              <div class="content">
                <div class="field">
                  <div class="label">Full Name</div>
                  <div class="value">${escapeHtml(cleanName)}</div>
                </div>
                <div class="field">
                  <div class="label">Work Email</div>
                  <div class="value"><a href="mailto:${escapeHtml(cleanEmail)}" style="color: #087589; text-decoration: none; font-weight: 600;">${escapeHtml(cleanEmail)}</a></div>
                </div>
                <div class="field">
                  <div class="label">Company</div>
                  <div class="value">${escapeHtml(cleanCompany)}</div>
                </div>
                <div class="field">
                  <div class="label">Service Required</div>
                  <div class="value" style="display: inline-block; padding: 6px 14px; background-color: #F4F6F8; border: 1px solid #E2E8F0; border-radius: 9999px; font-size: 13.5px; margin-top: 3px;">${escapeHtml(cleanService)}</div>
                </div>
                <div class="field">
                  <div class="label">Requirements &amp; Message</div>
                  <div class="message-box">${escapeHtml(cleanRequirements).replace(/\n/g, "<br/>")}</div>
                </div>
                <div class="field">
                  <div class="label">Marketing Opt-In</div>
                  <div class="value"><span style="display: inline-block; padding: 3px 10px; background-color: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 9999px; color: #166534; font-size: 12px;">${subMarketing ? "Yes" : "No"}</span></div>
                </div>

                <div class="actions-section">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      ${
                        googleSheetUrl
                          ? `<td>
                              <a href="${googleSheetUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="background-color: #AEF977; color: #0B2735 !important; text-decoration: none; padding: 13px 26px; border-radius: 9999px; display: inline-block; font-weight: 700; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase;">
                                VIEW IN GOOGLE SHEETS
                              </a>
                            </td>`
                          : ""
                      }
                      <td style="${googleSheetUrl ? "padding-left: 12px;" : ""}">
                        <a href="mailto:${escapeHtml(cleanEmail)}?subject=${encodeURIComponent(`Re: Vynentra Inquiry - ${cleanCompany}`)}" class="btn-secondary" style="background-color: #0E2F3E; color: #ffffff !important; text-decoration: none; padding: 13px 26px; border-radius: 9999px; display: inline-block; font-weight: 700; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase;">
                          REPLY VIA EMAIL
                        </a>
                      </td>
                    </tr>
                  </table>

                  ${
                    googleSheetUrl
                      ? `<div class="sheet-card" style="margin-top: 20px; background-color: #F4F6F8; border: 1px solid #E2E8F0; border-radius: 14px; padding: 14px 18px;">
                          <div class="sheet-card-title" style="font-size: 11px; font-weight: 700; color: #087589; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px;">GOOGLE SHEETS LEAD DATABASE</div>
                          <a href="${googleSheetUrl}" target="_blank" rel="noopener noreferrer" class="sheet-card-url" style="font-size: 12.5px; color: #087589; text-decoration: underline; word-break: break-all; display: block; line-height: 1.5;">${googleSheetUrl}</a>
                        </div>`
                      : ""
                  }
                </div>
              </div>

              <div class="footer">
                <strong style="color: #0B2735;">Vynentra Energy Solutions LLP</strong> &bull; Commercial &amp; Industrial Renewable Energy<br/>
                Submission logged at ${submissionDate} IST &bull; Receiver: ${escapeHtml(notifyEmail)}
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
