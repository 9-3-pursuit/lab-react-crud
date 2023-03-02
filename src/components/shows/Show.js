import { useState, useEffect } from "react"; // added useEffect
import { Link, useParams, useNavigate } from "react-router-dom"; // added useNavigate

import "./Show.css";

import ErrorMessage from "../errors/ErrorMessage";

// added in as well via class --- v
import { getOneShow, destroyShow } from "../../api/fetch" //grabbing one show; importing form fecth.js


function Show() {
  const [show, setShow] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  // v--- useParams gives us access to the parameters we set in out paths in our routing
  const { id } = useParams();
  const navigate = useNavigate() // added via class 


  useEffect(() => {
    getOneShow(id)
      .then(response => {
        setShow(response)
        if(response.id){
          setLoadingError(false)
        }else{
          setLoadingError(true)
        }
        
      })
      .catch((error) => {
        console.log(error)
        setLoadingError(true)
      })

    // ! React Hook useEffect has a missing dependency, when the dependency is []
    // ! dependency is either :id included in it, as show below OR remove the depencdency array aka []

  }, [id])


  function handleDelete(id) {
    destroyShow(id)
      .then(() => {
        navigate("/shows")
      })
      .catch((error)=>{
        console.log(error)
        loadingError(true)
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
