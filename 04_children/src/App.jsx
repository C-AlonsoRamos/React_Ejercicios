import "./App.css";
import Header from "./Components/Header/Header";
import Image from "./Components/Image/Image";
import Main from "./Components/Main/Main";
import Paragraph from "./Components/Paragraph/Paragraph";
import SubTitle from "./Components/SubTitle/Subtitle";
import Title from "./Components/Title/Title";
import Footer from "./Components/Footer/Footer";

function App() {
  const texto = "Bienvenidos a react";
  const sub = "Cuando terminemos React acabaremos así!!";
  const source = "../public/LogAhorcadoD.png";
  const alt = "ahorcado";
  const para = "Esto es el Footer";
  return (
    <div className="App">
      <Header>
        <Title text={texto} />
      </Header>
      <Main>
        <SubTitle text={sub} />
        <Image src={source} name={alt} />
      </Main>
      <Footer>
        <Paragraph text={para} />
      </Footer>
    </div>
  );
}

export default App;
