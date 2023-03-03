import { useState, useEffect } from "react"; // added useEffect
import { Link, useParams, useNavigate } from "react-router-dom"; // added useNavigate
import ErrorMessage from "../errors/ErrorMessage";
import { getOneMovie, destroyMovie } from "../../api/fetch" //grabbing one show; importing form fecth.js
import "../movies/Movie.css"

function Movie() {
    const [movie, setMovie] = useState({});
    const [returnError, setReturnError] = useState(false);

    // v--- useParams gives us access to the parameters we set in out paths in our routing
    const { id } = useParams();
    const navigate = useNavigate() // added via class 


    useEffect(() => {
        getOneMovie(id)
            .then(response => {
                setMovie(response)
                 
                // returns all the keys of object as array
                // if the movies array equals zero return the error as true
                if (Object.keys(response).length === 0) {
                    setReturnError(false)
                } else {
                    setReturnError(false)
                }

            })
            .catch((error) => {
                console.log(error)
                setReturnError(true)
            })

        // ! React Hook useEffect has a missing dependency, when the dependency is []
        // ! dependency is either :id included in it, as show below OR remove the depencdency array aka []

    }, [id])


    function handleDelete(id) {
        destroyMovie(id)
            .then(() => {
                navigate("/movies")
            })
            .catch((error) => {
                console.log(error)
                returnError(true)
            })
    }

    return (
        <section className="movies-movie-wrapper">
            <h2>{movie.title}</h2>
            <section className="movies-movie">
                {returnError ? (
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
