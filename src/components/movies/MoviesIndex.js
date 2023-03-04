import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllMovies } from "../../api/fetch"
import ErrorMessage from "../errors/ErrorMessage"
import MovieListing from "../movies/MovieListings"
import "./MoviesIndex.css"

function filterMovies(search, movie) {
  return movie.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase())
  })
}

export default function MoviesIndex() {
  const [loadError, setLoadError] = useState(false)
  const [movies, setMovies] = useState([])
  const [allMovies, setAllMovies] = useState([])
  const [title, setTitle] = useState("")

  function handleTextChange(event) {
    setTitle(event.target.value)
    const result = event.target.value.length ?
      filterMovies(event.target.value, allMovies) : allMovies
    // const filteredShows = filterShow(event.target.value, shows) -> another way to be written
    
    setMovies(result)

  }


  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setMovies(response)
        setLoadError(false)
      })
      .catch((error) => {
        console.log(error)
        setLoadError(true)
      })
  }, [])
  return (
    <div>
      {loadError ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All Movies🎥</h2>
          <button>
            <Link to="/movies/new">Add a new movie</Link>
          </button>
          <br />
          <label htmlFor="setTitle">
            Search Movies:
            <input
              type="text"
              value={title}
              id="setTitle"
            onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            {/* <!-- ShowListing components --> */}
            {movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id} />
            })}


          </section>
        </section>
      )}
    </div>
  );
}
