import { getAllMovies } from "../../api/fetch"
import MovieListing from "./MovieListing"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../errors/ErrorMessage";
import "../shows/ShowsIndex.css";

function filterMovies(search, movies) {
  return movies.filter(movie => {
    return movie.title.toLowerCase().includes(search.toLowerCase())
  })
}

export default function MoviesIndex() {
  const [allMovies, setAllMovies] = useState([])
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)
  const [searchTitle, setSearchTitle] = useState("")

 
  function handleTextChange(event){
    setSearchTitle(event.target.value);
     const filteredMovies = filterMovies(event.target.value, allMovies)
     const result = event.target.value.length ? filteredMovies : allMovies 
     setMovies(result);
    
  }

  useEffect(() => {
    getAllMovies().then(response => {
      setAllMovies(response)
      setMovies(response)
      setError(false)
    })
    .catch((error) => {
      console.log(error)
      setError(true)
    })
  })

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
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {movies.map((movie) => {
            return <MovieListing movie={movie} key={movie.id} />})}
          </section>
        </section>
      )}
    </div>
  );
}
