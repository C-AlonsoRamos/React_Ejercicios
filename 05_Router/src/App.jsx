import "./App.css";
import Header from "./Components/Header/Header";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import { Outlet } from "react-router-dom";

function App() {
  const texto = "Esto es el header";
  const fot = "Esto es el footer";

  return (
    <div className="App">
      <Header text={texto} />
      <Navbar />
      <Outlet />
      <Footer text={fot} />
    </div>
  );
}

export default App;
