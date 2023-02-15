import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import "./HomeDetail.css";

const HomeDetail = () => {
  const [creature, setCreature] = useState([]);
  const { id } = useParams();
  const { creatures } = useContext(UserContext);

  const findCreature = () => {
    setCreature(creatures.find((creature) => creature._id === id));
  };

  useEffect(() => {
    findCreature();
  }, []);

  return (
    <main>
      <Link to="/Home-Gallery">BACK Gallery</Link>
      <figure className="sw-figure">
        <img src={creature.image} alt={creature.name} />
        <h3>{creature.name}</h3>
        <figcaption>{creature.description}</figcaption>
      </figure>
    </main>
  );
};

export default HomeDetail;
