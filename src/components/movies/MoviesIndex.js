import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/fetch.js";
import ErrorMessage from "../errors/ErrorMessage";
import "./MoviesIndex.css";
import MovieListing from "./MovieListing.js";

function filterMovies(search, movie) {
  return movie.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });
}
export default function MoviesIndex() {
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies]= useState([])
  const [searchTitle, setSearchTitles] = useState("");
  function handleTextChange(event) {
    setSearchTitles(event.target.value);
    const result = event.target.value.length ? filterMovies(event.target.value, allMovies) : allMovies
   
    setMovies(result);
  }
  useEffect(() => {
    getAllMovies()
     .then((response) => {
      setAllMovies(response)
      setMovies(response);
      setError(false);
    }
  )
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
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            {movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}