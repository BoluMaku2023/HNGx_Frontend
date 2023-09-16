import React, { useState, useEffect } from "react";
import axios from "axios";
import { Fade } from "react-reveal";
import "./Hero.scss";

const Hero = ({ setSearch, search, loading, setIsLoading }) => {
  const [banner, setBanner] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const apiKey = "67144ed18ed5c9c6b40368f0b6400387";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`
        );

        if (response.data.results) {
          setBanner(
            response.data.results[
              Math.floor(Math.random() * response.data.results.length - 1)
            ]
          );
        }
      } catch (error) {
        console.error("Oops, there was an error:", error);
      }
    };
    fetchTopMovies();
  }, [search]);
  const fetchQuery = async (p) => {
    try {
      setIsLoading(true);
      const apiKey = "67144ed18ed5c9c6b40368f0b6400387";
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${p}&language=en-US&page=1`
      );

      if (response.data.results) {
        setIsLoading(false);
        setSearch(response.data.results);
      }
    } catch (error) {
      console.error("Oops, there was an error:", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchQuery(query);
  };
  return (
    <>
      <section
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${banner?.backdrop_path})`,
        }}
        className="header"
      >
        <div className="top-bar">
          <div className="logo-container">
            <img src="./tv.png" alt="Logo" />
            <h2>Movie Box</h2>
          </div>
          <div className="search-bar">
            <form onSubmit={handleSubmit}>
              <input
                className="search-bar-input"
                type="search"
                placeholder="What do you want to watch?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>

            <svg
              onClick={handleSubmit}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              style={{ cursor: "pointer" }}
            >
              <path
                d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="menu">
            <h3>Sign In</h3>
          </div>
        </div>

        <div className="top-details">
          <Fade left>
            <h2>{banner?.title}</h2>
            <div className="ratings-info">
              <div className="imdb">
                <img src="./imdb-icon.png" alt="IMDB" />
                <p>86.0 / 100</p>
              </div>
              <div className="rot">
                <img src="./rot-icon.png" alt="Rotten Tomatoes" />
                <p>97%</p>
              </div>
            </div>
            <div className="synopsis">
              <p>{banner?.overview}</p>
            </div>
            <button className="watch">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                  fill="white"
                />
              </svg>
              <h3>Watch trailer</h3>
            </button>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Hero;
