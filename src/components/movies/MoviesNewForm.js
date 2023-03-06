import { createMovie } from "../../api/fetch";
import "../shows/ShowsForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MoviesNewForm() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    type: "",
    title: "",
    country: "",
    dateAdded: "",
    releaseYear: "",
    rating: "",
    duration: "",
    listedIn: "",
    description: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    createMovie(movie)
      .then((results) => {
        navigate(`/movies/${results.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleTextChange(event) {
    setMovie({
      ...movie,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        value={movie.title}
        onChange={handleTextChange}
        id="title"
      />

      <label htmlFor="type">Type:</label>
      <input
        type="text"
        value={movie.type}
        onChange={handleTextChange}
        id="type"
      />

      <label htmlFor="country">Country:</label>
      <input
        type="text"
        value={movie.country}
        onChange={handleTextChange}
        id="country"
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        onChange={handleTextChange}
        value={movie.rating}
      />

      <label htmlFor="duration">Duration:</label>
      <input
        type="text"
        id="duration"
        value={movie.duration}
        onChange={handleTextChange}
      />

      <label htmlFor="releaseYear">Released Year:</label>
      <input
        type="text"
        id="releaseYear"
        value={movie.releaseYear}
        onChange={handleTextChange}
      />

      <label htmlFor="dateAdded">Date Added:</label>
      <input
        type="text"
        id="dateAdded"
        value={movie.dateAdded}
        onChange={handleTextChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={movie.description}
        onChange={handleTextChange}
      />

      <label htmlFor="listedIn">Listed In:</label>
      <input
        type="text"
        id="listedIn"
        value={movie.listedIn}
        onChange={handleTextChange}
      />
      <br />
      <input type="submit" />
    </form>
  );
}
export default MoviesNewForm;
