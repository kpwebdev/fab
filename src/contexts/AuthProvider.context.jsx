import React, { createContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase/firebase.util";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    setIsAuthReady(true);
  }, []);

  if (isAuthReady) {
    return (
      <AuthContext.Provider value={isAuthReady}>
        {children}
      </AuthContext.Provider>
    );
  }

  return <div>Loading...</div>;
};

export default AuthContextProvider;
