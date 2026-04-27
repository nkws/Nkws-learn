import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { AuthProvider } from "./contexts/AuthContext";
import App from "./App";
import { initSentry, SentryErrorBoundary } from "./utils/sentry";
import ErrorFallback from "./components/ErrorFallback";
import "./index.css";

initSentry();
inject();
injectSpeedInsights();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SentryErrorBoundary fallback={<ErrorFallback />}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SentryErrorBoundary>
  </StrictMode>
);
