import React, { useContext } from "react";
import { UserContext } from "../../context/context";
import "./Home.css";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <main>
      <div className="ts-home">
        <h1>The Simpsons Home : Bienvenido {user}</h1>
      </div>
    </main>
  );
};

export default Home;
