import './DetailEquipo.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useUser } from '../../context/userContext';

const DetailEquipo = () => {
  const [jugador, setJugador] = useState([]);
  const { id } = useParams();
  const { jugadores } = useUser();

  const findJugadores = () => {
    setJugador(jugadores.find((jugador) => jugador.id === id));
  };

  useEffect(() => {
    findJugadores();
  }, []);

  return (
    <main>
      <figure className="detail">
        <img src={jugador.img2} alt={jugador.name} />
        <h2>{jugador.name}</h2>
        <p> {jugador.position}</p>
        <p>{jugador.weight}</p>
        <p>{jugador.height}</p>
      </figure>
    </main>
  );
};

export default DetailEquipo;
