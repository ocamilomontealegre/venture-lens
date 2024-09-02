import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "@router/Router";
import { AuthProvider } from "@common/context/AuthContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </StrictMode>,
);
