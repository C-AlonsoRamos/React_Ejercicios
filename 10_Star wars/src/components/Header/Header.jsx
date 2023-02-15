import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import "./Header.css";

const Header = () => {
  const { logout, user } = useContext(UserContext);
  return (
    <header>
      <nav>
        <img
          src="https://res.cloudinary.com/dy4mossqz/image/upload/v1676390823/img/Star_Wars_Logo._jgsmwm.png"
          alt="StarWars Logo"
        />

        <NavLink to="/">Login</NavLink>

        {user !== null ? (
          <NavLink to="/Home-Gallery">Home-Gallery</NavLink>
        ) : (
          <h2>Logeate</h2>
        )}

        <button onClick={() => logout()}>logout</button>
      </nav>
    </header>
  );
};

export default Header;
