import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createMovie, updateMovie } from "../../api/fetch";
import { getOneMovie } from "../../api/fetch";
import "./MoviesForm.css";

export default function MoviesEditForm() {
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
    })

    const { id } = useParams();

    const navigate = useNavigate();
    
    useEffect(() => {
      if (id) {
        getOneMovie(id).then(response => {
          setMovie(response);
        }).catch(error => {
          console.log(error);
        });
      }
     
    }, [id])

    function handleSubmit(event) {
      event.preventDefault();
      if (id) {
        updateMovie(id, movie).then(response => {
          navigate(`/movies/${id}`);
        }).catch(error => {
          console.log(error);
        })
      } else {
        createMovie(movie).then(response => {
          navigate(`/movies/${response.id}`);
        }).catch(error => {
          console.log(error);
        })
      }
    }

    function handleTextChange(event) {
      setMovie({
        ...movie,
        [event.target.id]: event.target.value
      });
    }


    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={movie.title}
          onChange={handleTextChange}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={movie.description}
          onChange={handleTextChange}
        />

        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          value={movie.type}
          onChange={handleTextChange}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="text"
          id="rating"
          value={movie.rating}
          onChange={handleTextChange}
        />

        <label htmlFor="listedIn">Listed in</label>
        <input
          type="text"
          id="listedIn"
          value={movie.listedIn}
          onChange={handleTextChange}
        />

        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          id="duration"
          value={movie.duration}
          onChange={handleTextChange}
        />

        <label htmlFor="releaseYear">Release Year</label>
        <input
          type="text"
          id="releaseYear"
          value={movie.releaseYear}
          onChange={handleTextChange}
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={movie.country}
          onChange={handleTextChange}
        />

        <label htmlFor="dateAdded">Date added:</label>
        <input
          type="text"
          id="dateAdded"
          value={movie.dateAdded}
          onChange={handleTextChange}
        />

        <br />

        <input type="submit" />
      </form>
    );
}
