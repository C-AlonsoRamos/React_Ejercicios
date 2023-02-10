import "./App.css";
import React from "react";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import Countdown from "./components/Countdown/Countdown";
import Stopwatch from "./components/StopWach/Stopwach";

function App() {
  return (
    <div className="App">
      <DigitalClock />
      <Countdown />
      <Stopwatch />
    </div>
  );
}

export default App;
