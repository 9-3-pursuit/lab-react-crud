import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/fetch";
import { Link } from "react-router-dom";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "../movies/MovieListing";
import "../shows/ShowsIndex.css";

function MoviesIndex() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [error, setError] = useState(false);
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((results) => {
        setMovies(results);
        setAllMovies(results)
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
            <Link to="/movies/new">Add a new movie</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              value={searchTitle}
              // onChange={handleTextChange}
              id="searchTitle"
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
export default MoviesIndex;
