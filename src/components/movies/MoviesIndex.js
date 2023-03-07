import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllMovies } from "../../api/fetch";
import MovieListing from "./MovieListing"

import ErrorMessage from "../errors/ErrorMessage";

import "./MoviesIndex.css";

function filterMovies(search, movies){
  return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  })
}
export default function MoviesIndex() {

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const[allMovies, setAllMovies] = useState([]);


  function handleTextChange(event){
    const title = event.target.value;
    setSearchTitle(title);
    const result = title.length ? filterMovies(title, allMovies) : allMovies;
    setMovies(result)
  }

  useEffect(() => {
    getAllMovies().then((response) => {
      setMovies(response);
      setAllMovies(response);
      
      setError(false);
    })
  }, [])
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
              value = {searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            
            {movies.map((movie) => {
              return <MovieListing movie ={movie} key={movie.id} />
            })}
          </section>
        </section>
      )}
    </div>
  )
}
