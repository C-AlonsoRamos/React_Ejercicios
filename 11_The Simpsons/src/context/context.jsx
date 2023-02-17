import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState(
    localStorage.getItem(JSON.parse(localStorage.getItem("characters")))
  );

  const [user, setUser] = useState(() => {
    if (localStorage.getItem("user")) {
      return localStorage.getItem("user");
    } else {
      return null;
    }
  });

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ characters, setCharacters, user, setUser, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
