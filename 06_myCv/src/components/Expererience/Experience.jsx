import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="exp">
        {experience.map((item) => {
          return (
            <div className="card">
              <p>{item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
