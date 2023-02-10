import "./App.css";
import React from "react";
import { useState } from "react";
import { Cv } from "./cv/Cv";
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/Education";
import About from "./components/About/About";
import Experience from "./components/Expererience/Experience";
import More from "./components/More/More";

const { data, education, experience, languages } = Cv;

const App = () => {
  const [btnEducation, setbtnEducation] = useState(true);
  return (
    <div className="App">
      <Hero data={data} />
      <div>
        <p className="pa">About me</p>
      </div>
      <About data={data} />
      <div className="btns">
        <button className="btn" onClick={() => setbtnEducation(true)}>
          Education
        </button>
        <button className="btn" onClick={() => setbtnEducation(false)}>
          Experience
        </button>
      </div>
      {btnEducation ? (
        <Education education={education} />
      ) : (
        <Experience experience={experience} />
      )}
      <div>
        <p className="pa">Lenguages</p>
      </div>
      <More languages={languages} />
    </div>
  );
};

export default App;
