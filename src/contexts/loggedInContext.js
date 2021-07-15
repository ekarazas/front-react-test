import React, { createContext, useState } from "react";

export const LoggedInContext = createContext();

const LoggedInProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [loggedIn, setLoggedIn] = useState(token);

  return (
    <LoggedInContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInProvider;
