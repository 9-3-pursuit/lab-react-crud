import {getAllMovies} from "../../api/fetch.js"
import { Link } from "react-router-dom";
import MovieListing from "../movies/MovieListing.js";
import ErrorMessage from "../errors/ErrorMessage";
import { useEffect, useState } from "react";
import "./MoviesIndex.css"

function filterMovies(search, shows){
  return shows.filter((show)=>
  show.title.toLowerCase().includes(search.toLowerCase())
  )
 }

export default function MoviesIndex() {
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  function handleTextChange(e){
    setSearchTitle(e.target.value);
    const result = e.target.value.length ? filterMovies(e.target.value, allMovies) : allMovies;
    setMovies(result);
  }


  useEffect(()=>{
  getAllMovies().then(res=> {
    setAllMovies(res);
    setMovies(res);
    setError(false);
  }).catch((error)=>{
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
        <h2>All movies</h2>
        <button>
          <Link to="/movies/new">Add a new movie</Link>
        </button>
        <br />
        <label htmlFor="searchTitle">
          Search movies:
          <input
            type="text"
            value={searchTitle}
            id="searchTitle"
             onChange={handleTextChange}
          />
        </label>
        <section className="movies-index">
          {movies.map((movie)=>{
            return <MovieListing key={movie.id} movie={movie}/>
          })}
        </section>
      </section>
    )}
  </div>
);
    // <article>
    //    <h2>Movie List</h2>
    //    <button>Add a new movie</button>
      
    //    {movies.map((movie)=>{
    //    return (<MovieListing key={movie.id} movie={movie}/> 
    //    )} 
    //    )}


    // </article>
   

}
