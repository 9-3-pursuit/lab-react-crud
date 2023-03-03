import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  getOneShow,
  destroyShow,
  getOneMovie,
  destroyMovie,
} from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import "./Show.css";

function Show({ type }) {
  const [media, setMedia] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      if (!ignore) {
        try {
          const fetchFunction = type === "Movies" ? getOneMovie : getOneShow;
          const response = await fetchFunction(id);
          setMedia(response);
        } catch (error) {
          setLoadingError(true);
        }
      }
    };
    fetchData();

    return () => (ignore = true);
  }, [id, type]);

  const handleDelete = (id) => () => {
    const deleteFunction = type === "Movies" ? destroyMovie : destroyShow;
    deleteFunction(id);
    navigate(`/${type.toLowerCase()}`);
  };

  return (
    <section className="shows-show-wrapper">
      <h2>{media.title}</h2>
      <section className="shows-show">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {media.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {media.listedIn}
              </p>
              <p>
                <span>Country:</span> {media.country}
              </p>
              <p>
                <span>Rating:</span> {media.rating}
              </p>
              <p>
                <span>Date Added:</span> {media.dateAdded}
              </p>
            </aside>
            <article>
              <p>{media.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={handleDelete(media.id)}>
                Remove {type.slice(0, -1).toLowerCase()}
              </button>
              <Link to={`/${type.toLowerCase()}/${id}/edit`}>
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
