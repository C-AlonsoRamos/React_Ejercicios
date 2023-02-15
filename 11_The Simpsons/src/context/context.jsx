import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getCharacters = async () => {
    const res = await axios.get();
    const data = res.data;
    setCharacters(data);
    setLoaded(true);
  };

  useEffect(() => {
    getCharacters();
  }, []);

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
      value={{ characters, setCharacters, loaded, user, setUser, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
