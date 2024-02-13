import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
