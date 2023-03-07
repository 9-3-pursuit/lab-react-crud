import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/fetch.js";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing.js";


export default function MoviesIndex() {
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  function handleTextChange(event) {
    setSearchTitle(event.target.value);
    const filteredShows = allMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setAllMovies(filteredShows);
  }

  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setAllMovies(response);
        setMovies(response);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  return (
    <div>
      {error ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new show</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}

