import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{ user, setUser, totalPosts, setTotalPosts }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
