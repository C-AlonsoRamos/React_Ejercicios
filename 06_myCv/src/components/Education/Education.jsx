import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <div>
      <div className="educationCard">
        {education.map((item) => {
          return (
            <>
              <p className="name">📖 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
