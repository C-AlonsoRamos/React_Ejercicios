import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/context";
import "./Header.css";

const Header = () => {
  const { logout, user } = useContext(UserContext);

  useEffect(() => {}, [user]);
  return (
    <header className="ts-header">
      <img
        src="https://res.cloudinary.com/dy4mossqz/image/upload/v1676486863/The%20Simpsons/The-Simpsons-Logo-PNG_nqmi3j.png"
        alt="The Simpsons Logo"
      />
      <ul>
        <li>
          {localStorage.getItem("user") && <NavLink to="/home">Home</NavLink>}
        </li>
        <li>
          {localStorage.getItem("user") && (
            <NavLink to="/gallery">Gallery</NavLink>
          )}
        </li>
        <li>
          {localStorage.getItem("user") && <NavLink to="/about">About</NavLink>}
        </li>
        <li>
          {localStorage.getItem("user") && (
            <button
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
