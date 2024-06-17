import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";
import pt from "javascript-time-ago/locale/pt";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(pt);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
