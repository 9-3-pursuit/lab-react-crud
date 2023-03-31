import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { getOneMovie, updateMovie } from './Movie.jsx';


function MoviesEditForm() {
  const { id } = useParams();
  const history = useHistory();

  const [movie, setMovie] = useState({ title: "", director: "", year: "" });

  useEffect(() => {
    getOneMovie(id).then((data) => {
      setMovie(data);
    });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMovie(id, movie).then(() => {
      history.push(`/movies/${id}`);
    });
  };

  return (
    <div>
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={movie.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            id="director"
            name="director"
            value={movie.director}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            name="year"
            value={movie.year}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default MoviesEditForm;
