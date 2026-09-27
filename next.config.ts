import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["puppeteer-core", "@sparticuz/chromium", "puppeteer"],
  outputFileTracingIncludes: {
    "/api/resume": ["./node_modules/@sparticuz/chromium/bin/**/*"],
  },
};

export default nextConfig;
