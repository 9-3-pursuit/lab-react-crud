import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage"; 

import "./MoviesIndex.css";
import MovieListing from "./MovieListing.js"


function filterMovies(search, movies) {
  return movies.filter ((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
});
}


export default function MoviesIndex() {
  const[ error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchMovieTitle, setSearchMovieTitle] = useState("");

function handleTextChange(event) {
  setSearchMovieTitle(event.target.value);
  const movieResult = event.target.value.length ? filterMovies(event.target.value, allMovies) : allMovies;
  setMovies(movieResult)
}
 useEffect(() => {
  getAllMovies().then((response) => {
    setAllMovies(response);
    setMovies(response)
    setError(false);
  })
  .catch((error) => {
    console.log(error);
    setError(true);
  });
 },[]);

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
              value={searchMovieTitle}
              id="searchTitle"
              onChange={(handleTextChange)}
            />
          </label>
          <section className="movies-index">
          </section>
          {movies.map((movie) => {
            return <MovieListing movie={movie} key={movie.id}/>
          })}
        </section>
      )}
    </div>
  );
}



