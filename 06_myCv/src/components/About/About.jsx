import React from "react";
import "./About.css";

const About = ({ data }) => {
  return (
    <div className="about">
      {data.aboutMe.map((item) => {
        return <p>{item.info}</p>;
      })}
    </div>
  );
};

export default About;
