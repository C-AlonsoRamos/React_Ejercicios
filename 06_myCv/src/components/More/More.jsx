import React from "react";
import "./More.css";

const More = ({ languages }) => {
  return (
    <div className="more">
      {languages.map((item) => {
        return (
          <>
            <p className="name">{item.language}</p>
            <p>💬 {item.Splevel}</p>
            <p>✏️ {item.Wrlevel}</p>
          </>
        );
      })}
    </div>
  );
};

export default More;
