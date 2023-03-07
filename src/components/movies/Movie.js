import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "../styles/Media.css";

import ErrorMessage from "../errors/ErrorMessage";
import { getMedia, destroyMedia } from "../../api/fetch";

const Movie = () => {
  const [movie, setMovies] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getMedia("movies", id)
      .then((movieData) => {
        setMovies(movieData.id ? movieData : null);
        setLoadingError(!movieData.id);
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, [id]);

  const handleDelete = (movieID) => {
    destroyMedia("movies", movieID)
      .then(() => {
        setMovies({});
        navigate("/movies", { state: { deletedmovieTitle: movie.title } });
      })
      .catch((error) => {
        console.log(error);
        setLoadingError(true);
      });
  };

  return (
    <section className="shows-show-wrapper">
      <h2>{movie.title}</h2>
      <section className="shows-show">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {movie.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {movie.listedIn}
              </p>
              <p>
                <span>Country:</span> {movie.country}
              </p>
              <p>
                <span>Rating:</span> {movie.rating}
              </p>
              <p>
                <span>Date Added:</span> {movie.dateAdded}
              </p>
            </aside>
            <article>
              <p>{movie.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(movie.id)}>
                Remove movie
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
};

export default Movie;
