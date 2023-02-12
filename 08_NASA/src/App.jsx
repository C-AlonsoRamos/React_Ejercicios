import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Figure from "./components/Figure";

function App() {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);
  const nasaUrl = "https://api.nasa.gov/";
  const keyNasa = "kGMWzI6W2CWAe6nRkcLggmokojwadEEOgJHl77yO";

  const logo = "../public/Nasa.png";

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${nasaUrl}planetary/apod?date=${date}&api_key=${keyNasa}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

  const input = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  return (
    <div className="App">
      <div className="header">
        <img src={logo} />
        <h1>Astronomy Picture of the Day</h1>
        <input type="date" id="photo-day" onChange={input} />
      </div>
      {date > today ? (
        <h2>Please choose a previous date</h2>
      ) : (
        <Figure data={apod} />
      )}
    </div>
  );
}

export default App;
