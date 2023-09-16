import React, { useEffect, useState } from "react";
import "./MovieDetails.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Genre from "./Genre";
import { Fade } from "react-reveal";
import Names from "./Names";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const params = useParams();

  useEffect(() => {
    const fetchDetail = async (p) => {
      try {
        const apiKey = "67144ed18ed5c9c6b40368f0b6400387";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${p}?api_key=${apiKey}`
        );

        if (response) {
          
          setMovie(response.data);
        }
      } catch (error) {
        console.error("An Error occured: could not get movie details:", error);
      }
    };
    console.log(params);
    fetchDetail(params.id);
  }, [params]);
  const genres = movie?.genres.map((genre) => {
    return <Genre genre={genre.name} />;
  });
  const prod_companies = movie?.production_companies.map((name) => {
    return <Names name={name.name} />;
  });
  const prod_countries = movie?.production_countries.map((name) => {
    return <Names name={name.name} />;
  });
  return (
    <>
      {movie === null ? (
        <div className="loading mt-52 mx-auto">
          <img src="./loading.png" />
        </div>
      ) : (
        <section className="main">
          <Fade left>
            <div className="side-bar">
              <div className="logo-container-d">
                <img src="../tv.png" alt="Logo" />
                <h2 className="name">Movie Box</h2>
              </div>
              <div className="sb-nav">
                <Link to={"/"}>
                  <div className="nav-contain">
                    <img src="../home.png" alt="Home" />
                    <span>Home</span>
                  </div>
                </Link>
                <div className="nav-contain-active">
                  <img src="../movie-projector.png" alt="Movies" />
                  <span>Movies</span>
                </div>
                <div className="nav-contain">
                  <img src="../tv-show.png" alt="Home" />
                  <span>TV Series</span>
                </div>
                <div className="nav-contain">
                  <img src="../calendar.png" alt="Home" />
                  <span>Upcoming</span>
                </div>
                <div className="play">
                  <h3>Play movie quizes and earn free tickets</h3>
                  <p>50k people are playing now</p>
                  <div className="start">
                    <h4>Start playing</h4>
                  </div>
                </div>
                <div className="nav-contain">
                  <img src="../Logout.png" alt="Home" />
                  <span>Logout</span>
                </div>
              </div>
            </div>
          </Fade>
          <div className="inner-main">
            <div className="top-bar">
              <div className="logo-container-dt">
                <img src="../tv.png" alt="Logo" />
                <h2 className="name">Movie Box</h2>
              </div>
              <div className="logo-container-dt2">
                <img src="../home.png" alt="Home" />
                <img src="../movie-projector2.png" alt="Movies" />
                <img src="../tv-show.png" alt="Home" />
                <img src="../calendar.png" alt="Home" />
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie?.backdrop_path})`,
              }}
              className="trailer"
            >
              <div className="circular-play">
                <img src="../play-btn.png" alt="" />
              </div>
              <h4>Watch trailer</h4>
            </div>
            <div className="details">
              <h3 data-testid="movie-title">{movie?.title}</h3>
              <h3> • </h3>
              <h3 data-testid="movie-release_date">
                {movie?.release_date.slice(0, 4)}
              </h3>
              <h3> • </h3>
              <h3 data-testid="movie-runtime">{movie?.runtime}m</h3>
              <div className="genre">{genres}</div>
            </div>

            <div className="split">
              <div className="details-b">
                <p data-testid="movie-overview">{movie?.overview}</p>
                <p>
                  Production Companies: <span>{prod_companies}</span>
                </p>
                <p>
                  Production Countries: <span>{prod_countries}</span>
                </p>
                <img className="top-r" src="../top-rated.png" />
              </div>
              <div className="details-b">
                <div className="rate">
                  <img src="../Star.png" alt="" />
                  <p>
                    {movie.vote_average}
                    <span> | {movie.popularity}</span>
                  </p>
                </div>
                <div className="showtimes">
                  <img src="../tickets.png" />
                  <p>See Showtimes</p>
                </div>
                <div className="options">
                  <img src="../List.png" />
                  <p>More watch options</p>
                </div>
                <img src="../more-options.png" />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MovieDetails;
