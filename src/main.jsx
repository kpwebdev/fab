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

// context providers
import AuthContextProvider from "./contexts/AuthProvider.context.jsx";
import CardProvider from "./contexts/CardProvider.context.jsx";
import GoogleFontsProvider from "./contexts/GoogleFontsProvider.jsx";
import ProfileProvider from "./contexts/ProfileProvider.context.jsx";
import APIProvider from "./contexts/APIProvider.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <APIProvider>
        <GoogleFontsProvider>
          <CardProvider>
            <ProfileProvider>
              <App />
            </ProfileProvider>
          </CardProvider>
        </GoogleFontsProvider>
      </APIProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
