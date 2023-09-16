import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
const MovieCard = ({ movie }) => {
  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <Fade bottom>
          <div className="card" data-testid="movie-card">
            <img
              data-testid="movie-poster"
              //src="./m-poster.png"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <p data-testid="movie-release_date" className="release-date">
              {movie.release_date.slice(0, 4)}
            </p>

            <h3 data-testid="movie-title" className="movie-title">
              {movie.title}
            </h3>

            <div className="ratings-info-c">
              <div className="imdb-c">
                <img src="./imdb-icon.png" alt="IMDB" />
                <p>{movie.vote_average}/10</p>
              </div>
              <div className="rot-c">
                <img src="./rot-icon.png" alt="Rotten Tomatoes" />
                <p>97%</p>
              </div>
            </div>
            <p className="genre">Action, Drama, Comedy</p>
          </div>
        </Fade>
      </Link>
    </>
  );
};

export default MovieCard;
