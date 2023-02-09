import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Listado">Listado</NavLink>
      </li>
      <li>
        <NavLink to="/About">About</NavLink>
      </li>
    </nav>
  );
};

export default Navbar;
