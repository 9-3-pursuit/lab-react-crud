import { useEffect, useState } from "react";
import { getOneMovie, destroyMovie } from "../../api/fetch";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../shows/Show.css";
import ErrorMessage from "../errors/ErrorMessage";

function Movie() {
  const [loadingError, setLoadingError] = useState(false);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  function handleDelete(id) {
    destroyMovie(id)
      .then(() => {
        navigate("/movies");
        setLoadingError(true);
      })
      .catch((error) => {
        console.log(error);
        setLoadingError(false);
      });
  }
  useEffect(() => {
    getOneMovie(id)
      .then((results) => {
        setMovie(results);
        if (results.id) {
          setLoadingError(false);
        } else {
          setLoadingError(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoadingError(true);
      });
  }, [id]);

  return (
    <section className="shows-show-wrapper">
      <h2>{Movie.title}</h2>
      <section className="shows-show">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span>
                {movie.duration}
              </p>
              <p>
                <span>Listed Categories:</span>
                {movie.listedIn}
              </p>
              <p>
                <span>Country:</span>
                {movie.country}
              </p>
              <p>
                <span>Rating:</span>
                {movie.rating}
              </p>
              <p>
                <span>Date Added:</span>
                {movie.dateAdded}
              </p>
            </aside>
            <article>
              <p>{movie.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(movie.id)}>
                Remove Movie
              </button>
              <Link to={`/movies/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}
export default Movie;
