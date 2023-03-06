import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneMovie, destroyMovie } from "../../api/fetch";
import "./Movie.css";

import ErrorMessage from "../errors/ErrorMessage";

function Movie() {
    const [movie, setmovie] = useState({});
    const [loadingError, setLoadingError] = useState(false);
    // console.log(useParams());
    const { id } = useParams(); //useParams gives us access to the parameters we set in our paths in our routing
    const navigate = useNavigate();

    useEffect(() => {
        getOneMovie(id)
            .then((response) => {
                setmovie(response);
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

    function handleDelete(id) {
        destroyMovie(id)
            .then(() => {
                navigate("/movies");
            })
            .catch((error) => {
                console.log(error);
                loadingError(true);
            });
    }

    return (
        <section className="movies-movie-wrapper">
            <h2>{movie.title}</h2>
            <section className="movies-movie">
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
}

export default Movie;