import { useState, useEffect } from "react";

// useParams is a hook that allows us to access the URL parameters
import { Link, useParams } from "react-router-dom";

import "./styles/Show.css";

import ErrorMessage from "../errors/ErrorMessage";

// importing the `getOneShow` function from the `fetch` module
import { getOneShow, destroyShow } from "../../api/fetch";

function Show() {
  const [show, setShow] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  // useParams is a hook that allows us to access the URL parameters
  // In this case we want to access the id parameter
  // The id parameter is the id of the show we want to display
  // The id parameter is passed in the URL from the ShowList component
  const { id } = useParams();

  // useEffect is a hook that allows us to run code when the component mounts and when the component updates
  // The second argument is an array of dependencies.
  // If the array is empty, the code in the callback function will only run when the component mounts.
  // In this case we want to run the code in the callback function when the component mounts.
  // We also want to run the code in the callback function when the id changes.
  useEffect(() => {
    getOneShow(id)
      .then((showData) => setShow(showData))
      .catch((error) => {
        console.log(error);
        setLoadingError(true);
      });
  }, [id]);

  function handleDelete() {}

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
