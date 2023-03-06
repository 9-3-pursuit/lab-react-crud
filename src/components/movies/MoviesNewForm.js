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
    setMovie();
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

      {/* 
    
    country: "",
    dateAdded: "",
    releaseYear: "",
    rating: "",
    duration: "",
    listedIn: "",
    description: "", */}
    </form>
  );
}
export default MoviesNewForm;
