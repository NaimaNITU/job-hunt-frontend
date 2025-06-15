import React, { createContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const authData = {
    user: {},
    login: () => {},
    logout: () => {},
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
