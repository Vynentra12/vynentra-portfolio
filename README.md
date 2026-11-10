# Vynentra website

Marketing site for Vynentra, a renewable energy solutions and project development company. Built with Next.js 16 (App Router), React 19, Tailwind CSS 4, GSAP / Framer Motion and Lenis smooth scrolling.

> Next.js 16 has breaking changes from earlier versions (for example, `params` is a Promise). Check `node_modules/next/dist/docs/` before relying on older patterns. See `AGENTS.md`.

## Getting started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Environment variables

Create a `.env` file in the project root (it is gitignored):

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical site URL used for metadata, sitemap and robots. Defaults to `https://vynentra.com`. |
| `GOOGLE_CLIENT_EMAIL` | Contact form | Google service account email. |
| `GOOGLE_PRIVATE_KEY` | Contact form | Service account private key (`\n` escapes are supported). |
| `SHEET_ID` | Contact form | Google Sheet that stores leads. Share it with the service account as an editor. |
| `BREVO_API_KEY` | Contact form | Brevo API key for lead notification emails. |
| `SENDER_EMAIL` | Contact form | Verified Brevo sender address. |
| `NOTIFY_EMAIL` | Contact form | Inbox that receives lead notifications. |
| `TIMEZONE` | No | Time zone for submission timestamps. Defaults to `Asia/Kolkata`. |

## Contact form

`POST /api/contact` ([app/api/contact/route.ts](app/api/contact/route.ts)):

- Valid leads are appended to the `Sheet1` tab (columns A–G) and emailed via Brevo. The request succeeds if either step works.
- Bot checks: a hidden honeypot field and a minimum fill time of 2 seconds. Flagged submissions get a normal success response, but are written to the `Spam` tab (columns A–I) instead, capped at 30 rows per hour.
- Rate limit: 5 submissions per IP per 10 minutes. The limiter is in-memory, so on serverless hosting it is per instance; use a shared store such as Upstash Redis for strict limits.

The sheet needs both a `Sheet1` and a `Spam` tab.

## Project structure

```
app/                 Routes (App Router). Each route sets SEO metadata via lib/seo.ts
  api/contact/       Contact form endpoint
components/
  sections/          Page sections (home page uses the *V2 sections)
  navigation/        Navbar
  motion/            Lenis smooth-scroll provider
  ui/                Shared UI pieces
lib/
  services-data.ts   Service pages content
  case-studies-data.ts
  blog-data.ts       Insights articles
  seo.ts             Site URL and pageMetadata() helper
  rate-limit.ts      In-memory rate limiter
public/              Static assets (stock photos live in public/images/stock)
```

## Content

Services, case studies and insights are plain TypeScript data in `lib/`. Adding an entry there creates its detail page, metadata and sitemap entry automatically.
