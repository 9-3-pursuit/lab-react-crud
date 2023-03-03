import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";


export default function MoviesIndex() {

  // initializing state value of error variable to false
  const [error, setError] = useState(false);
  // initializing state value of movies variable to empty array
  const [movies, setMovies] = useState([]);
  // initializing state value of allMovies variable to empty array
  const [allMovies, setAllMovies] = useState([]);
  // initializing state value of searchTitle variable to empty string
  const [searchTitle, setSearchTitle] = useState("")

  // calling useEffect to call getAllShows function 
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

  return <p>Movie List</p>;
}
