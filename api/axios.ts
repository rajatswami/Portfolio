import axios from "axios";

// The API routes live on the same Next.js server now (app/api/*), so this
// is always a same-origin relative path - no VITE_API_URL/CORS needed like
// the old two-repo setup required.
export const apiBaseUrl = "/api";

// The résumé PDF is generated on the fly by app/api/resume/route.ts - there's
// no static file to keep in sync.
export const resumePdfUrl = `${apiBaseUrl}/resume`;

const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
