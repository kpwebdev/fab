import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// bootstrap - style
import "./sass/bootstrap.scss";

// tailwindcss - style
import "./css/tailwind.css";

// bootstrap - script
import * as bootstrap from "bootstrap";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
