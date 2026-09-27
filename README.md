# Rajat Swami — Portfolio (Next.js)

A single Next.js project merging what used to be two separate repos
(`portfolio-backend` + `portfolio-frontend`) into one deployable app —
built for Vercel.

- **Site**: one public page (Home/About/Skills/Experience/Projects/Resume/
  Contact/Footer), dark + gold theme, Framer Motion throughout.
- **Contact form**: `POST /api/contact` validates the submission and
  appends it as a row to a private Google Sheet via a service account.
  No database, no admin panel — the Sheet itself is the inbox.
- **Résumé**: `GET /api/resume` renders an HTML résumé template to a PDF
  with Puppeteer and streams it back — generated fresh every time, not a
  static file.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the 3 Google Sheets values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Set in `.env.local` (gitignored) for local dev, and in your hosting
provider's dashboard (e.g. Vercel → Project → Settings → Environment
Variables) for production. None of these should ever get a `NEXT_PUBLIC_`
prefix — they're read only on the server, inside the API routes.

| Variable | Description |
|---|---|
| `GOOGLE_SHEET_ID` | The spreadsheet ID from your Google Sheet's URL |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | `client_email` from your service account's JSON key |
| `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` | `private_key` from the same JSON, `\n` escapes left as-is |

See `CONVERSION_STATUS.md` for the full one-time Google Cloud setup steps
(creating the service account, enabling the Sheets API, sharing the sheet).

## Why the résumé route branches on `puppeteer` vs `puppeteer-core`

Vercel's serverless functions can't run the full `puppeteer` package — its
bundled Chromium is too large and isn't packaged for the Lambda-based
runtime Vercel uses. `app/api/resume/route.ts` picks between:

- **Local dev**: plain `puppeteer` (simple, already caches its own Chromium).
- **On Vercel** (detected via the `VERCEL` env var Vercel sets automatically):
  `puppeteer-core` + `@sparticuz/chromium`, a Chromium build packaged to fit
  serverless size limits.

Same template, same PDF output, either way — only how the browser gets
launched differs.

## Project structure

```
app/
  page.tsx          # the whole one-page site
  layout.tsx        # fonts (next/font/google), metadata
  globals.css       # theme tokens, matches the original site 1:1
  api/
    contact/route.ts   # POST - validates + appends to Google Sheets
    resume/route.ts    # GET  - Puppeteer PDF generation
components/         # section components (Hero, About, Skills, ...)
common/             # shared UI (Section, SectionHeading, FormField, ...)
data/resume.ts      # all résumé content - single source of truth
interfaces/         # shared TypeScript types
lib/                # server-only: ApiError, validators, googleSheets
                    # service, config, résumé HTML template + photo
api/                # client-side: axios instance, sendApiRequest, contact.api
```

## Deploying to Vercel

1. Push this folder to its own GitHub repo (or connect it directly if
   using the Vercel CLI from here).
2. Import it in Vercel — it auto-detects Next.js, no build config needed.
3. Add the 3 environment variables above in the Vercel dashboard before
   the first deploy (or redeploy after adding them).
4. Done — both the site and both API routes deploy together as one project.
