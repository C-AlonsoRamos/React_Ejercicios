import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [creatures, setCreatures] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getCreatures = async () => {
    const res = await axios.get(
      "https://starwars-databank.vercel.app/creatures"
    );
    const data = res.data.creatures;
    setCreatures(data);
    setLoaded(true);
  };

  useEffect(() => {
    getCreatures();
  }, []);
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    if (localStorage.getItem("user")) {
      return localStorage.getItem("user");
    } else {
      return null;
    }
  });

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, logout, creatures, setCreatures, loaded }}
    >
      {children}
    </UserContext.Provider>
  );
};
