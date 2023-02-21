import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CharactersPortrait from "../../components/CharactersPortrait.jsx/CharactersPortrait";
import { UserContext } from "../../context/context";
import DetailLayout from "../../layouts/DetailLayout";

import "./Gallery.css";

const Gallery = () => {
  const { characters, setCharacters } = useContext(UserContext);
  const [filterCharacters, setFilterCharacters] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getCharacters = async () => {
    const res = await axios.get(
      "https://63ee4213d466e0c18bac9016.mockapi.io/simpsons"
    );
    const data = res.data;
    setCharacters(data);
    setFilterCharacters(data);
    localStorage.setItem("characters", JSON.stringify(data));
    setLoaded(true);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const filteredCharacters = (key) => {
    const filter = characters.filter((character) =>
      character.name.toLowerCase().includes(key.toLowerCase())
    );
    setFilterCharacters(filter);
  };

  return (
    <main>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(ev) => filteredCharacters(ev.target.value)}
        />
      </div>
      {filterCharacters ? (
        <DetailLayout>
          {filterCharacters.map((character) => (
            <CharactersPortrait character={character} key={character.id} />
          ))}
        </DetailLayout>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
};

export default Gallery;
