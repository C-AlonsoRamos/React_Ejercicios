import "./Figure.css";
import React from "react";

const Figure = ({ data }) => {
  return (
    <figure>
      <img src={data.url} alt={data.title} />
      <div className="card">
        <div className="title-card">
          <h1 className="title">{data.title}</h1>
        </div>
        <div className="date-cr">
          <span>{data.date}</span>
          <span>{data.copyright}</span>
        </div>
        <div className="description">{data.explanation}</div>
      </div>
    </figure>
  );
};
export default Figure;
