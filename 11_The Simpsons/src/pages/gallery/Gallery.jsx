import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CharactersPortrait from "../../components/CharactersPortrait.jsx/CharactersPortrait";
import { UserContext } from "../../context/context";
import DetailLayout from "../../layouts/DetailLayout";

import "./Gallery.css";

const Gallery = () => {
  const { characters, setCharacters } = useContext(UserContext);
  const [loaded, setLoaded] = useState(false);

  const getCharacters = async () => {
    const res = await axios.get(
      "https://63ee4213d466e0c18bac9016.mockapi.io/simpsons"
    );
    const data = res.data;
    setCharacters(data);
    localStorage.setItem("characters", JSON.stringify(data));
    setLoaded(true);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <main>
      {loaded ? (
        <DetailLayout>
          {characters.map((character) => (
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
