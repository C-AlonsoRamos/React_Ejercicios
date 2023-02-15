import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/context";
import "./Header.css";

const Header = () => {
  const { logout, user } = useContext(UserContext);

  return (
    <header className="ts-header">
      {user !== null && (
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      )}
      <img
        src="https://res.cloudinary.com/dy4mossqz/image/upload/v1676486863/The%20Simpsons/The-Simpsons-Logo-PNG_nqmi3j.png"
        alt="The Simpsons Logo"
      />
      <ul>
        <li>{user !== null && <NavLink to="/home">Home</NavLink>}</li>
        <li>{user !== null && <NavLink to="/gallery">Gallery</NavLink>}</li>
        <li>{user !== null && <NavLink to="/about">About</NavLink>}</li>
      </ul>
    </header>
  );
};

export default Header;
