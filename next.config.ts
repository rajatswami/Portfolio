import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Puppeteer ships native binaries - keep it out of Next.js's server bundle
  // instead of letting it try to bundle it, which breaks `puppeteer-core` on
  // Vercel. (@sparticuz/chromium-min ships no binary of its own - it fetches
  // Chromium from a URL at runtime - so it doesn't need this treatment, and
  // Next's output file tracing never has a local binary folder to lose.)
  serverExternalPackages: ["puppeteer-core", "puppeteer"],
};

export default nextConfig;
