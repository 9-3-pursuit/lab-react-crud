import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllMovies } from "../../api/fetch"
import ErrorMessage from "../errors/ErrorMessage"
import MovieListing from "./MovieListing"

export default function MoviesIndex() {
  const [loadError, setLoadError] = useState(false)
  const [movies, setMovies] = useState([])

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
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              //  value={searchTitle}
              id="searchTitle"
            // onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
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
