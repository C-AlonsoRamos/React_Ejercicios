import React, { useContext } from "react";
import CreaturePortrait from "../../components/Creatures/Creatures";
import MainHomeGallery from "../../Layout/MainHomeGallery";
import { UserContext } from "../../context/userContext";
import "./Home.css";

const Home = () => {
  const { creatures, loaded } = useContext(UserContext);
  return (
    <main>
      <h2>Criaturas StarWars</h2>
      {loaded ? (
        <MainHomeGallery>
          {creatures.map((creature) => (
            <CreaturePortrait creature={creature} key={creature._id} />
          ))}
        </MainHomeGallery>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
};

export default Home;
