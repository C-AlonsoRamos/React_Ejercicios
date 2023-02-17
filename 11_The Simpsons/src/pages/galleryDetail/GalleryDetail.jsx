import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/context";
import "./GalleryDetail.css";
useParams;

const GalleryDetail = () => {
  const [character, setCharacter] = useState([]);
  const { characters } = useContext(UserContext);
  const { id } = useParams();

  const findCharacters = () => {
    setCharacter(characters.find((character) => character.id === id));
  };

  useEffect(() => {
    findCharacters();
  }, []);

  return (
    <main>
      <figure className="ts-figure">
        <img src={character.img} alt={character.name} />
        <h2>{character.name}</h2>
        <figcaption>{character.description}</figcaption>
      </figure>
    </main>
  );
};

export default GalleryDetail;
