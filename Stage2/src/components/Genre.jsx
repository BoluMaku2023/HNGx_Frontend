import React from "react";
import "./MovieDetails.scss";

// the genre icons design
const Genre = ({ genre }) => {
  return (
    <div className="genre-btn">
      <span>{genre}</span>
    </div>
  );
};

export default Genre;
