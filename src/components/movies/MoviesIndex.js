import { Link } from "react-router-dom";

import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "../movies/MovieListing"
import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/fetch.js";
import "./MoviesIndex.css"

function filterMovies(search, movies) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });
}
export default function MoviesIndex() {

  const [error, setError ] = useState(false)
  const [movies, setMovies ] = useState([])
  const [allMovies, setAllMovies] = useState([]) 
  const [searchTitle, setSearchTitle] = useState("")

  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterMovies (title, allMovies) : allMovies;
  
    setSearchTitle(title);
    setMovies(result);
  };


useEffect(() => {
  getAllMovies()
  .then(response => {
    setMovies(response);
    setAllMovies(response)
    setError(false)
  })
  .catch((error) => {
    console.log(error)
    setError(true)
  }) 
},[])

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
              onChange= {handleTextChange}
            />
          </label>
          <section className="movies-index">
            {movies.map(movie => <MovieListing key={movie.id} movie={movie}/>)}
          </section>
        </section>
      )}
    </div>
  );
}
