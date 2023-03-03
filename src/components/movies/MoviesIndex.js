import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../../api/fetch.js";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing.js";
import "./MoviesIndex.css";

// at some point in our code we should change error message to true if there's an error
function filterMovies(search, movies) {
   return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase()); 
  });
}

export default function MoviesIndex() {
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([])
  const [searchTitle, setSearchTitle] = useState('')

  function handleTextChange(event) {
    setSearchTitle(event.target.value);
    const result = event.target.value.length ? filterMovies(event.target.value, allMovies) : allMovies
    //const filteredMovies = filterMovies(event.target.value, movies);
    setMovies(result);
  }
  
  useEffect(() => {
    getAllMovies()
    .then(response => {
      setAllMovies(response)
      setMovies(response);
      setError(false);
    })
    .catch((error) => {
      console.log(error);
      setError(true);
    })
  }, [])

  return (
    <div>
      {/* <p>Movie List</p>; */}
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
            {movies.map(movie => {
              return <MovieListing movie={movie} key={movie.id} />
            })}
          </section>
        </section>
      )}
    </div>
  );
}

