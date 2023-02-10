import React from "react";
import "./About.css";

const About = ({ data }) => {
  return (
    <div className="about">
      <div className="myAbout">
        {data.aboutMe.map((item) => {
          return <p>{item.info}</p>;
        })}
      </div>
    </div>
  );
};

export default About;
