import "./App.css";
import { useState } from "react";

const App = () => {
  {
    /* ejercicio1 */
  }
  const x = 16;
  {
    /* ejercicio2 */
  }
  const names = ["Pedro", "Juan", "Paco", "Antonio"];
  {
    {
      /* ejercicio3 */
    }
  }
  const peliculas = [
    {
      id: 1,
      name: "spiderman",
      date: 2010,
    },
    {
      id: 2,
      name: "tarzan",
      date: 2020,
    },
    {
      id: 3,
      name: "ali-g",
      date: 2015,
    },
  ];
  {
    /* ejercicio 4 */
  }
  const [name, setName] = useState(false);

  return (
    <div className="App">
      <p>
        {/* ejercicio 1 */}

        {x >= 6 && x < 13
          ? "Buenos dias"
          : x === 13 || x < 20
          ? "Buenas tardes"
          : "Buenas noches"}
      </p>
      {/* ejercico 2 */}
      {names.map((name) => (
        <h3 key={name}>{name}</h3>
      ))}
      {/*ejercico 3 */}
      {peliculas.map((peli) => (
        <div key={peli.id}>
          <h2>{"Pepe"}</h2>
          <h2>{peli.date}</h2>
        </div>
      ))}

      {/* ejercicio 4 */}
      <button
        onClick={() => {
          setName(!name);
        }}
      >
        click
      </button>
      {name && <h2>Jose</h2>}
    </div>
  );
};

export default App;
