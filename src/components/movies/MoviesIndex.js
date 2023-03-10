import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";
import "./MoviesIndex.css";


export default function MoviesIndex() {

  // initializing state value of error variable to false
  const [error, setError] = useState(false);
  // initializing state value of movies variable to empty array
  const [movies, setMovies] = useState([]);
  // initializing state value of allMovies variable to empty array
  const [allMovies, setAllMovies] = useState([]);
  // initializing state value of searchTitle variable to empty string
  const [searchTitle, setSearchTitle] = useState("")

  // calling useEffect to call getAllMovies function 
  useEffect(() => {
    getAllMovies().then(response => {
      // using setMovies function inside getAllMovies to set value of movies state variable to API response
      setMovies(response);
      // using setAllShows function inside getAllShows to set value of allMovies state variable to API response
      setAllMovies(response);
      // using setError to ensure value of error variable is false 
      setError(false);
    }).catch((error) => {
      console.log(error)
      setError(true)
    })
  }, [])

  // creating helper function to filter movies
  function filterMovies(searchInput, allMoviesData) {
    return allMoviesData.filter((movie) => {
      return movie.title.toLowerCase().includes(searchInput.toLowerCase())
    });
  }

  function handleTextChange(event) {
    // updating state variable to equal value of event target
    setSearchTitle(event.target.value);

    const result = event.target.value.length ? filterMovies(searchTitle, allMovies) : allMovies;

    setMovies(result);
  }

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
            {movies.map(movie => {
              return <MovieListing movie={movie} key={movie.id} />
            })}
          </section>
        </section>
      )}
    </div>
  )
}
