import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllMedia } from "../../api/fetch";

import ErrorMessage from "../errors/ErrorMessage";
//import MovieListing from "./MovieListing";

//import "./styles/MoviesIndex.css";

export default function MoviesIndex() {
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const handleTextChange = (event) => {
    const { value } = event.target;
    setSearchTitle(value);
  };

  useEffect(() => {
    getAllMedia("movies")
      .then((allMovies) => setMovies(allMovies))
      .catch((catchError) => {
        console.log(catchError);
        setError(true);
      });
  }, []);

  return (
    <div>
      {error ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new show</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input type="text" value={searchTitle} id="searchTitle" onChange={handleTextChange} />
          </label>
          <section className="movies-index">
            {movies.map((movie) => {
              // return <MovieListing movie={movie} />;
              console.log(movie);
            })}
          </section>
        </section>
      )}
    </div>
  );
}
