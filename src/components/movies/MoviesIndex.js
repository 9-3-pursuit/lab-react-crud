import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import {getAllMovies}  from "../../api/fetch";
import "./MoviesIndex.css";
import MovieListing from "./MovieListing";

function filterMovies(search, movies) {
  return movies.filter((movie) =>{
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });
}

export default function MoviesIndex() {
  // return <p>Movie List</p>;
  const [movieError, setMovieError] = useState(false)
  const [movies, setMovies] = useState([])
  const [allMovies, setAllMovies] = useState([])
  const [searchTitle, setSearchTitle] = useState("");
  
  function handleTextChange(event) {
    setSearchTitle(event.target.value);
    const result = event.target.value.length ? filterMovies(event.target.value, allMovies) : allMovies
    
    setMovies(result);
  }
  
  useEffect(()=>{
    getAllMovies()
    .then(response =>{
      setAllMovies(response)
      setMovies(response)
      setMovieError(false)
    }).catch((error)=>{
      console.log(error)
      setMovieError(true)
    })
  },[])

return(
  <div>
    {movieError ? (
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
            {movies.map((movie)=>{ 
              return <MovieListing movie={movie} key={movie.id}/>
            })}
          </section>
      </section>
    )}
  </div>
  )
}
