import './Equipo.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Equipo = ({ jugador }) => {
  return (
    <Link className="atm-equipo" to={`/primer-equipo/${jugador.id}`}>
      <img src={jugador.img1} alt={jugador.name} />
    </Link>
  );
};

export default Equipo;
