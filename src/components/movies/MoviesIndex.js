
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import  ErrorMessage  from "../errors/ErrorMessage";
import { getAllMovies } from "../../api/fetch";
import MovieListing from "./MovieListing";


import "../shows/ShowsIndex.css";

export default function MoviesIndex() {

  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)
  const [searchTitle, setSearchTitle] = useState("")
  const [allMovies, setAllMovies] = useState([])

  useEffect(()=> {
    getAllMovies().then((response) => { setMovies(response); setError(false);setAllMovies(response)}).catch((error) => { setError(true)})
  },[])

  function filterShows(search, movies) {
    return movies.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  function handleTextChange(event) {
    setSearchTitle(event.target.value);
    const result = event.target.value.length ? filterShows(event.target.value, allMovies) : allMovies
    setMovies(result);
  }


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
            Search Movie:
            <input
              type="text"
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {movies.map((movie) =>  <MovieListing movie={movie}  key={movie.id} />)}
          </section>
        </section>
      )}
    </div>
  );
}
