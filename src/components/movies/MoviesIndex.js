import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllMedia } from "../../api/fetch";
import { filterMediaByTitle } from "../../util/helper";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";

import "../styles/MediaIndex.css";

export default function MoviesIndex() {
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [deletedMovieTitle, setDeletedMovieTitle] = useState(null);

  const location = useLocation();

  const handleTextChange = (event) => {
    const { value } = event.target;
    setSearchTitle(value);
  };

  useEffect(() => {
    if (location.state?.deletedMovieTitle) {
      setDeletedMovieTitle(location.state.deletedMovieTitle);
      delete location.state.deletedMovieTitle;
    }

    getAllMedia("movies")
      .then((data) => {
        const filtered = filterMediaByTitle(data, searchTitle);
        setMovies(filtered);
      })
      .catch((catchError) => {
        console.log(catchError);
        setError(true);
      });
  }, [location.state?.deletedMovieTitle, searchTitle]);

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
            <input type="text" value={searchTitle} id="searchTitle" onChange={handleTextChange} />
          </label>
          <h1>{deletedMovieTitle ? `${deletedMovieTitle} was deleted from our records.` : null}</h1>
          <div>Movies: {movies.length}</div>
          <section className="movies-index">
            {movies.map((movie) => {
              return <MovieListing movie={movie} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}
