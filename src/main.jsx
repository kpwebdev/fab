import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// bootstrap - style
import "./sass/bootstrap.scss";
// import "./css/bootstrap.css";

// tailwindcss - style
import "./css/tailwind.css";

// bootstrap - script
import * as bootstrap from "bootstrap";

// toastify stylesheet
import "react-toastify/dist/ReactToastify.css";

// styling for phone number input
import "react-phone-input-2/lib/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
