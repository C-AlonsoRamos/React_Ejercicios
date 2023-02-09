import "./App.css";
import Images from "./Components/Images/Images";
import SubTitle from "./Components/SubTitle/SubTitle";
import Title from "./Components/Title/Title";

function App() {
  const titulo = "Bienvenidos a react";
  const subtitulo = "Hoy toca repaso de props";
  const image = "../public/LogAhorcadoD.png";
  const texto = "ahorcado";

  return (
    <div className="App">
      <Title text={titulo} />
      <SubTitle text={subtitulo} />
      <Images src={image} text={texto} />
    </div>
  );
}

export default App;
