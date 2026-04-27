import * as Sentry from "@sentry/react";

// Init only when a DSN is configured. Mirrors the optional-Supabase pattern:
// the app runs fine without monitoring; production builds with VITE_SENTRY_DSN
// set in Vercel will send errors automatically.
export function initSentry() {
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  if (!dsn) return;

  Sentry.init({
    dsn,
    environment: import.meta.env.MODE,
    // No PII: don't attach IPs, cookies, or request bodies. Children's names
    // and parents' emails must never reach Sentry.
    sendDefaultPii: false,
    // Sample 10% of normal sessions for performance traces; 100% of errors.
    tracesSampleRate: 0.1,
    // Drop noisy browser extension errors that we can't fix anyway.
    ignoreErrors: [
      "ResizeObserver loop limit exceeded",
      "ResizeObserver loop completed with undelivered notifications",
      "Non-Error promise rejection captured",
    ],
  });
}

export const SentryErrorBoundary = Sentry.ErrorBoundary;
