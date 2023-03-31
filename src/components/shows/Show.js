import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { destroyShow, getOneShow } from '../../api/fetch';
import ErrorMessage from '../errors/ErrorMessage';
import "./Show.css";

function Show() {
  const [show, setShow] = useState({});
  const [loadingError, setLoadingError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

   useEffect(() => {
     getOneShow(id)
       .then((response) => {
         setShow(response);
         if (response.id) {
           setLoadingError(false);
         } else {setLoadingError(true);}
       })
       .catch((error) => {
         console.log(error);
         setLoadingError(true);
       });
   }, 
   [id]);

  function handleDelete(id) {
    destroyShow(id)
      .then(() => {
        navigate('/shows');
      })
      .catch((error) => {
        loadingError(true);
      });
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
