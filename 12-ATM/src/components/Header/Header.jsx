import './Header.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

import { useUser } from '../../context/userContext';

const Header = () => {
  const { logout } = useUser();
  return (
    <header>
      <nav>
        <NavLink to="/">
          <img
            src="https://res.cloudinary.com/dy4mossqz/image/upload/v1676714377/Atm/atm_logo_ysmnvn.svg"
            alt="atm logo"
          />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/primer-equipo">Equipo</NavLink>
          </li>
          <li>
            <NavLink to="/tienda">Tienda</NavLink>
          </li>
          <li>
            <NavLink to="/Club">Club</NavLink>
          </li>
          <li>
            <button onClick={() => logout()}>
              <img
                src="https://res.cloudinary.com/dy4mossqz/image/upload/v1676748537/Atm/logout_FILL0_wght400_GRAD0_opsz48_e4kxjv.png"
                alt="Logout logo"
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
