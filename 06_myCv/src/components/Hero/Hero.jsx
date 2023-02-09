import React from "react";
import "./Hero.css";
const Hero = ({ data }) => {
  return (
    <div className="hero">
      <img src={data.image} alt={data.name} />
      <div className="card">
        <h2>
          {data.name} {data.surname}
        </h2>
        <p>🏙️ {data.city}</p>
        <p>🗓️ {data.birthDate}</p>
        <p>
          📧 <a href={"mail to:" + data.email}>Christian@gmail.com</a>
        </p>
        <p>📲 {data.phone}</p>
        <p>
          💾
          <a href={data.gitHub}> GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
