import React from "react";
import MovieCard from "./MovieCard";
import "../App.scss";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

const TopMovies = ({ movies }) => {
  const movie_list = movies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });
  return (

    <div className="movies-container">{movie_list}</div>
  );
};

export default TopMovies;
