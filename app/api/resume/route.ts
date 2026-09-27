import { NextResponse } from 'next/server';
import type { Browser } from 'puppeteer-core';
import { getResumeHtml } from '../../../lib/resume.template';

// Puppeteer needs a real Node.js process (to spawn Chromium), not the Edge
// runtime, and this route always renders fresh - never statically cached.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

// Vercel's serverless functions can't run the full `puppeteer` package (its
// bundled Chromium is too large / not Lambda-compatible), so production
// uses `puppeteer-core` + `@sparticuz/chromium` (a Chromium build packaged
// to fit serverless size limits) instead. Locally, plain `puppeteer` is
// simpler and already has Chromium cached.
const isServerless = Boolean(process.env.VERCEL);

const launchBrowser = async (): Promise<Browser> => {
  if (isServerless) {
    const chromium = (await import('@sparticuz/chromium')).default;
    const puppeteerCore = await import('puppeteer-core');
    return puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }

  const puppeteer = await import('puppeteer');
  return puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  }) as unknown as Browser;
};

// Launching Chromium is the expensive part (roughly a second) - reuse one
// browser instance across requests instead of spinning a fresh one up each
// time, and only open/close a page per request. If that browser process
// ever dies (crash, cold-start recycle), drop the cached reference so the
// next request transparently relaunches it instead of failing forever.
let browserPromise: Promise<Browser> | null = null;

const getBrowser = (): Promise<Browser> => {
  if (!browserPromise) {
    browserPromise = launchBrowser().then((browser) => {
      browser.once('disconnected', () => {
        browserPromise = null;
      });
      return browser;
    });
    browserPromise.catch(() => {
      browserPromise = null;
    });
  }
  return browserPromise;
};

/**
 * GET /api/resume (public)
 * Renders the résumé template to a PDF with Puppeteer and streams it back -
 * there's no static file to keep in sync, the PDF is always generated fresh
 * from the same content the site itself is built from.
 */
export async function GET() {
  const browser = await getBrowser();
  const page = await browser.newPage();

  try {
    // setContent() doesn't accept 'networkidle0' (only applies to real
    // navigations) - document.fonts.ready is what actually guarantees the
    // Google Fonts <link> the template loads has resolved before we
    // snapshot to PDF, otherwise it can render with the fallback font.
    await page.setContent(getResumeHtml());
    await page.evaluateHandle('document.fonts.ready');
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
    });

    return new NextResponse(Buffer.from(pdf), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Rajat-Resume.pdf"',
      },
    });
  } finally {
    await page.close();
  }
}
