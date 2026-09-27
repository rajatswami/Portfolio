# Portfolio: Next.js Conversion — Status

This folder (`portfolio-nextjs/`) is a **new, single-project merge** of the two
existing repos — `portfolio-backend` (Express) and `portfolio-frontend`
(React + Vite) — into one Next.js app, so it can deploy as a single project
on Vercel instead of two separately-hosted services.

**The original two repos are untouched.** Nothing was deleted or modified
there. This is a fresh build alongside them; once you're happy this works,
you can retire the old repos whenever you want.

**Git**: nothing here has been staged or committed — every file below is
just sitting on disk, same as the other two repos. Do that yourself
whenever you're ready.

## Requirements (carried over from the original two repos, unchanged)

- Single public one-page portfolio site (Home/About/Skills/Experience/
  Projects/Resume/Contact/Footer), dark + gold theme, Framer Motion
  animations throughout, matching the current live design exactly.
- No login/auth, no database, no admin panel.
- Contact form: visitor submits name/email/message → validated → appended
  as a row to a private Google Sheet via a service account. No way to read
  messages back through the app — they're read directly in the Sheet.
- "Download Resume" generates a PDF on the fly (not a static file) via
  Puppeteer, rendering an HTML résumé template that mirrors the on-site
  content, including the embedded profile photo.
- Deploys on **Vercel**. Puppeteer's normal package doesn't work on
  Vercel's serverless functions, so the résumé route uses `puppeteer-core`
  + `@sparticuz/chromium` in production, and plain `puppeteer` for local
  development.

## What's been done — everything, verified live

- [x] Read the **current** state of every file in both `portfolio-backend`
      and `portfolio-frontend` fresh before porting anything (several files
      had been hand-edited independently since earlier in the conversation —
      name is "Rajat Swami", GitHub link filled in, résumé template
      redesigned with a white main panel + GitHub contact row, `Section`/
      `Navbar` widened to `max-w-[1536px]`, `SocialLinks`/`FormField`/
      `FormAlert` simplified, `contact.controller` using
      `Partial<IContactMessage>`, `googleSheets.service` caching the Sheets
      client). Everything below reflects that current state.
- [x] Scaffolded with `create-next-app` (App Router, TypeScript, Tailwind
      v4 via `@tailwindcss/postcss`, ESLint) — official defaults, not
      hand-rolled config.
- [x] Ported every component (`Navbar`, `Hero`, `About`, `Skills`,
      `Experience`, `Projects`, `Resume`, `Contact`, `Footer`) and every
      shared piece in `common/` (`Section`, `SectionHeading`, `Logo`,
      `SocialLinks`, `FormField`, `FormAlert`, `motion.ts`) — added
      `"use client"` to every one that uses hooks or Framer Motion
      (everything except `Footer`, `SocialLinks`, `FormField`, which have
      no client-only behavior).
- [x] Routing: `react-router-dom`'s `<Routes>`/`<Route>` removed entirely —
      it was already a single route, so it's just `app/page.tsx` now.
      `Logo.tsx`'s `Link` switched from `react-router-dom` to `next/link`.
- [x] Simplified the API client: since the "backend" is now the same
      Next.js server, `apiBaseUrl` is just `/api` (relative) — no
      `VITE_API_URL`, no CORS, no cross-origin config needed at all.
- [x] Ported the backend logic into `lib/` (`ApiError`, `validators`,
      `googleSheets.service`, `config`, the résumé HTML template + the
      embedded profile photo) — same code, framework-agnostic, unchanged.
- [x] `app/api/contact/route.ts` — Next.js Route Handler wrapping the same
      validate → `appendContactRow` logic, same `{success, message,
      errorCode}` response shape as before.
- [x] `app/api/resume/route.ts` — Route Handler with the `puppeteer` (dev)
      vs `puppeteer-core` + `@sparticuz/chromium` (Vercel, detected via the
      `VERCEL` env var) branch, same browser-reuse-across-requests pattern
      as the old Express controller.
- [x] Fixed one real API difference along the way: this puppeteer-core
      version's `setContent()` no longer accepts `'networkidle0'` as a
      `waitUntil` value (only real navigations can use it now) — dropped
      it and kept relying on `document.fonts.ready`, which is what
      actually mattered for the Google Fonts to load correctly anyway.
- [x] `next.config.ts` sets `serverExternalPackages` for
      `puppeteer`/`puppeteer-core`/`@sparticuz/chromium` so Next.js doesn't
      try to bundle their native binaries.
- [x] Copied `public/profile.jpg` and `public/favicon.svg`; fonts (Inter +
      Poppins) moved from `index.html` `<link>` tags to `next/font/google`
      (self-hosted, no external request, same weights as before).
- [x] `.env.example` (committed template) + `.env.local` (gitignored, has
      your real Google Sheets credentials copied over for testing here).
- [x] **`npm run build`**: clean, zero TypeScript errors.
      **`npm run lint`**: clean, zero warnings/errors.
- [x] **Live end-to-end test** (`next start`, real server, not just build):
  - Homepage renders correctly, static assets (`profile.jpg`,
    `favicon.svg`) serve with 200.
  - Contact form: submitted a real test message through
    `POST /api/contact` → independently verified via a separate read
    call that the row actually landed in your real Google Sheet → cleaned
    up the test row afterward (left your own earlier real submission
    untouched).
  - Résumé PDF: downloaded via `GET /api/resume`, confirmed it's a valid
    single-page PDF, and visually confirmed it's a **pixel-perfect match**
    with the current résumé design (dark sidebar with photo, white main
    panel, GitHub row, all pill/badge styling identical).

## What's intentionally left for you to do (can't be done from here)

- **Test the actual Vercel deployment path.** The `puppeteer-core` +
  `@sparticuz/chromium` branch follows the standard, well-documented
  pattern for this exact problem, but it targets AWS Lambda's specific
  runtime — it can't be genuinely tested outside of actually deploying to
  Vercel. Deploy once, try the "Download Resume" button on the live URL,
  and tell me if anything's off; I can iterate from the error message.
- Creating the Vercel project itself and connecting this folder (needs
  your Vercel account — either push this folder to its own GitHub repo and
  import it, or use the Vercel CLI directly).
- Adding the 3 `GOOGLE_SHEET_ID` / `GOOGLE_SERVICE_ACCOUNT_EMAIL` /
  `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` values into Vercel's **Environment
  Variables** dashboard before the first real deploy (same values already
  in `.env.local` here — that file is gitignored and was never committed).
- Deciding when to retire the old two-repo setup once you're confident
  this one is working the way you want on Vercel.
- Staging/committing this project into git yourself, whenever you're ready
  (per your instruction, I haven't run `git add`/`git commit` on anything
  here).
