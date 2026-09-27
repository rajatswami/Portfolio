import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Puppeteer/Chromium ship native binaries - keep them out of Next.js's
  // server bundle instead of letting it try to bundle them, which breaks
  // both `puppeteer-core` and `@sparticuz/chromium` on Vercel.
  serverExternalPackages: ["puppeteer-core", "@sparticuz/chromium", "puppeteer"],
};

export default nextConfig;
