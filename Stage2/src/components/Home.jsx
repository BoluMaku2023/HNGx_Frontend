import { useEffect, useState } from "react";
import "../App.scss";
import Hero from "./Hero";
import TopMovies from "./TopMovies";
import axios from "axios";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTopMovies = async () => {
      try {
        setIsLoading(true);
        const apiKey = "67144ed18ed5c9c6b40368f0b6400387";
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
          { timeout: 5000 }
        );

        if (response.data.results) {
          setTopMovies(response.data.results.slice(0, 10));
          // console.log(response.data.results.slice(0, 10));
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Oops, there was an error:", error);
      }
    };
    getTopMovies();
  }, []);
  const ErrorDialog = () => {
    return (
      <div className="h-50 w-72">
        <p className="text-error text-2xl">
          An error occured while fetching the movie:{error}
        </p>
      </div>
    );
  };
  return (
    <>
      <div>
        <Hero
          setSearch={setTopMovies}
          loading={loading}
          setIsLoading={setIsLoading}
          search={topMovies}
        />
        {loading ? (
          <div className="loading mx-auto">
            <img src="./loading.png" />
          </div>
        ) : error ? (
          <ErrorDialog />
        ) : (
          <>
            <div className="featured">
              <div className="top-ft">
                <h2>Featured Movie</h2>
                <div className="see-more">
                  <p>See more</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M7.5 4.66668L13.3333 10.5L7.5 16.3333"
                      stroke="#B91C1C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <TopMovies movies={topMovies} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
