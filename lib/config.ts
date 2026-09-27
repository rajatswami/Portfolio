// Next.js automatically loads .env.local (and .env) for both `next dev` and
// `next build`/`next start` - no dotenv package needed, and these values are
// server-only (never sent to the client) since none of them are prefixed
// with NEXT_PUBLIC_.
interface IConfig {
  google: {
    sheetId: string;
    clientEmail: string;
    privateKey: string;
  };
}

const config: IConfig = {
  google: {
    sheetId: process.env.GOOGLE_SHEET_ID || '',
    clientEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || '',
    // Service account private keys are stored in .env with literal `\n`
    // escapes (real newlines break most .env parsers) - turn them back into
    // actual newlines before handing the key to googleapis.
    privateKey: (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
  },
};

export default config;
