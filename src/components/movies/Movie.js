import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneShow} from "../../api/fetch";

// import "./Show.css";

import ErrorMessage from "../errors/ErrorMessage";

function Movie() {
  const [movie, setMovie] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const { id } = useParams();

  



  useEffect(() => {
    getOneShow(id)
      .then((response) => {
        setMovie(response);
        if (response.id) {
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

  const handleDelete = (id) => {
    fetch(`/api/movies/${id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
      .catch(error => console.log(error));
      loadingError(true);
  }
  


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
                Remove show
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
