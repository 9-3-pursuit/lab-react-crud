import "../movies/MoviesIndex.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/fetch.js";
import ErrorMessage from "../errors/ErrorMessage";

import { MovieListing } from "./MovieListing.js";

// at some point in our code we should change error message to true if there's an error
function filterMovie(search, movies) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });
}

export default function MoviesIndex() {
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([])
  const [searchMovieTitle, setSearchMovieTitle] = useState("");


  function handleTextChange(event) {
    setSearchMovieTitle(event.target.value);
    const result = event.target.value.length ? filterMovie(event.target.value, allMovies) : allMovies
    // const filteredShows = filterShows(event.target.value, shows);
    setMovies(result);
  }
  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setAllMovies(response)
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
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new movie</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              value={searchMovieTitle}
              id="searchMovieTitle"
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
