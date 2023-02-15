import "./Creatures.css";
import React from "react";
import { Link } from "react-router-dom";

const CreaturePortrait = ({ creature }) => {
  return (
    <Link className="sw-portrait" to={`/Home-Gallery/${creature._id}`}>
      <h2>{creature.name}</h2>
      <img src={creature.image} alt={creature.name} />
    </Link>
  );
};

export default CreaturePortrait;
