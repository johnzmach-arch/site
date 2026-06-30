import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { siteConfig } from "./config.js";
import "./index.css";

// Injeta a cor de acento do config nas CSS variables (single source of truth).
const root = document.documentElement;
root.style.setProperty("--accent", siteConfig.accentColor);
root.style.setProperty("--accent-soft", siteConfig.accentSoft);

// HashRouter: funciona em qualquer hospedagem estática sem configurar o servidor.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
