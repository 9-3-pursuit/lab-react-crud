import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createMovie } from "../api";

function MoviesNewForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const movie = { title, description, director, year };
    createMovie(movie)
      .then(() => {
        history.push("/movies");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Director:</label>
          <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
        </div>
        <div>
          <label>Year:</label>
          <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <button type="submit">Create Movie</button>
      </form>
    </div>
  );
}

export default MoviesNewForm;
