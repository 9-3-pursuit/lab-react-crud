import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllMovies, createMovie, deleteMovie, updateMovie, getOneMovie } from "../../api/fetch";


function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getOneMovie(id)
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>Director: {movie.director}</p>
      <p>Year: {movie.year}</p>
    </div>
  );
}

export default Movie;
