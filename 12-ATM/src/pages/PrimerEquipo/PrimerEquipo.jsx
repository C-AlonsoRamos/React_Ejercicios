import './PrimerEquipo.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Equipo from '../../components/Equipo/Equipo';
import { useUser } from '../../context/userContext';
import MainGallery from '../../Layouts/MainGallery';
import useDebounce from '../../hook/useDebounce';

const PrimerEquipo = () => {
  const { jugadores, setJugadores } = useUser();
  const [filterJugadores, setFilterJugadores] = useState([]);
  const debouncedValue = useDebounce(filterJugadores, 1000);

  const getCharaters = async () => {
    const res = await axios.get('https://63f1fdd1f28929a9df51822b.mockapi.io/Atm');
    const data = res.data;
    setJugadores(data);
    setFilterJugadores(data);
  };

  useEffect(() => {
    getCharaters();
  }, []);

  const filterPlayers = (key) => {
    const filter = jugadores.filter(
      (jugador) =>
        jugador.name.toLowerCase().includes(key.toLowerCase()) ||
        jugador.position.toLowerCase().includes(key.toLowerCase()),
    );
    setFilterJugadores(filter);
  };

  return (
    <main>
      <div className="atm-input">
        <input
          type="text"
          placeholder="Search..."
          onChange={(ev) => filterPlayers(ev.target.value)}
        />
      </div>
      {debouncedValue ? (
        <MainGallery>
          {debouncedValue.map((jugador) => (
            <Equipo jugador={jugador} key={jugador.id} />
          ))}
        </MainGallery>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
};

export default PrimerEquipo;
