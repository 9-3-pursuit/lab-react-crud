import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getMedia, updateMedia } from "../../api/fetch";

import "../styles/MediaForm.css";

export default function MoviesForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movieTitle, setMovieTitle] = useState(null);

  const [movie, setMovie] = useState({
    type: "",
    title: "",
    country: "",
    dateAdded: "",
    description: "",
    duration: "",
    listedIn: "",
    rating: "",
    releaseYear: "",
  });

  useEffect(() => {
    getMedia("movies", id)
      .then((response) => {
        setMovieTitle(response.title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMedia("movies", id, movie)
      .then((response) => {
        console.log(response);
        navigate(`/movies/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTextChange = (event) => {
    setMovie({
      ...movie,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Editing Data for: {movieTitle}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={movie.title} onChange={handleTextChange} />

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" value={movie.description} onChange={handleTextChange} />

        <label htmlFor="type">Type</label>
        <input type="text" id="type" value={movie.type} onChange={handleTextChange} />

        <label htmlFor="rating">Rating:</label>
        <input type="text" id="rating" value={movie.rating} onChange={handleTextChange} />

        <label htmlFor="listedIn">Listed in</label>
        <input type="text" id="listedIn" value={movie.listedIn} onChange={handleTextChange} />

        <label htmlFor="duration">Duration</label>
        <input type="text" id="duration" value={movie.duration} onChange={handleTextChange} />

        <label htmlFor="releaseYear">Release Year</label>
        <input type="text" id="releaseYear" value={movie.releaseYear} onChange={handleTextChange} />

        <label htmlFor="country">Country</label>
        <input type="text" id="country" value={movie.country} onChange={handleTextChange} />

        <label htmlFor="dateAdded">Date added:</label>
        <input type="text" id="dateAdded" value={movie.dateAdded} onChange={handleTextChange} />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}
