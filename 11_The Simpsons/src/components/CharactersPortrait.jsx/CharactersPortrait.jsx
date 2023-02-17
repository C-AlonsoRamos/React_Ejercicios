import React from "react";
import "./CharactersPortrait.css";
import { Link } from "react-router-dom";

const CharactersPortrait = ({ character }) => {
  return (
    <Link className="ts-portrait" to={`/gallery/${character.id}`}>
      <figure className="ts-figure-gallery">
        <h2>{character.name}</h2>
        <img src={character.img} alt={character.name} />
      </figure>
    </Link>
  );
};

export default CharactersPortrait;
