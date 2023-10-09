import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import App from "./components/App/App";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
