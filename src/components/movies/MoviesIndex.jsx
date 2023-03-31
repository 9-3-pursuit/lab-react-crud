import { useEffect, useState } from "react";
import { getAllMovies } from "../../api/fetch";

function MoviesIndex() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies().then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <h1>All Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MoviesIndex;
