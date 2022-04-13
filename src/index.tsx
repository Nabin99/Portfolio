import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root") as HTMLElement;
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
