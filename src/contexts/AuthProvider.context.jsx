import React, { createContext, useEffect, useState } from "react";
import { app, auth } from "../utils/firebase/firebase.util";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  console.log("currentUser from useState", currentUser);
  console.log("currentUser from auth", auth.currentUser);

  useEffect(() => {
    auth._initializationPromise.then(() => {
      setIsAuthReady(true);
    });

    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));

    return unsub;
  }, []);

  if (isAuthReady) {
    return (
      <AuthContext.Provider value={{ isAuthReady, currentUser }}>
        {children}
      </AuthContext.Provider>
    );
  }

  return (
    <div className="t-min-h-screen t-min-w-full t-flex t-items-center t-justify-center">
      <div className="custom-loader"></div>
    </div>
  );
};

export default AuthContextProvider;
