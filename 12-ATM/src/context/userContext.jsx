import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from '../hook/useLocalStorage';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const [jugadores, setJugadores] = useState([]);

  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data);
    navigate('/dasboard/primer-equipo', '/dasboard/tienda', '/dasboard/club', {
      replace: true,
    });
  };

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  return (
    <UserContext.Provider value={{ user, login, logout, jugadores, setJugadores }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
