import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {getOneShow} from "../../api/fetch.js" 
import "./Show.css";
import ErrorMessage from "../errors/ErrorMessage";
import {destroyShow} from "../../api/fetch.js" 

function Show() {
  const [show, setShow] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const Navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOneShow(id)
    .then((response) => {
      setShow(response);
      setLoadingError(false);
    })
    .catch((error) => {
      console.log(error);
      setLoadingError(true);
    })
  }, [id])

  function handleDelete(id) {
    destroyShow(id).then(() =>{
      Navigate("/shows");
    })
    .catch((error) => {
      console.log(error);
      setLoadingError(true);
    })
  }

  return (
    <section className="shows-show-wrapper">
      <h2>{show.title}</h2>
      <section className="shows-show">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {show.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {show.listedIn}
              </p>
              <p>
                <span>Country:</span> {show.country}
              </p>
              <p>
                <span>Rating:</span> {show.rating}
              </p>
              <p>
                <span>Date Added:</span> {show.dateAdded}
              </p>
            </aside>
            <article>
              <p>{show.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(show.id)}>
                Remove show
              </button>
              <Link to={`/shows/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}

export default Show;
