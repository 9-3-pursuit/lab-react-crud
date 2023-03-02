import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOneShow, destroyShow } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import "./Show.css";

function Show() {
  const [show, setShow] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      if (!ignore) {
        try {
          const response = await getOneShow(id);
          setShow(response);
        } catch (error) {
          setLoadingError(true);
        }
      }
    };
    fetchData();

    return () => (ignore = true);
  }, [id]);

  const handleDelete = (id) => () => {
    destroyShow(id);
    navigate("/shows");
  };

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
              <button className="delete" onClick={handleDelete(show.id)}>
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
