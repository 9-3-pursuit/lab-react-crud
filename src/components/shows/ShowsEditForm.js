import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getOneShow, updateShow } from "../../api/fetch";

import "./styles/ShowsForm.css";

export default function ShowsForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showTitle, setShowTitle] = useState(null);

  const [show, setShow] = useState({
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
    getOneShow(id)
      .then((response) => {
        setShowTitle(response.title);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateShow(id, show)
      .then((response) => {
        console.log(response);
        navigate(`/shows/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTextChange = (event) => {
    setShow({
      ...show,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Editing Data for: {showTitle}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={show.title} onChange={handleTextChange} />

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" value={show.description} onChange={handleTextChange} />

        <label htmlFor="type">Type</label>
        <input type="text" id="type" value={show.type} onChange={handleTextChange} />

        <label htmlFor="rating">Rating:</label>
        <input type="text" id="rating" value={show.rating} onChange={handleTextChange} />

        <label htmlFor="listedIn">Listed in</label>
        <input type="text" id="listedIn" value={show.listedIn} onChange={handleTextChange} />

        <label htmlFor="duration">Duration</label>
        <input type="text" id="duration" value={show.duration} onChange={handleTextChange} />

        <label htmlFor="releaseYear">Release Year</label>
        <input type="text" id="releaseYear" value={show.releaseYear} onChange={handleTextChange} />

        <label htmlFor="country">Country</label>
        <input type="text" id="country" value={show.country} onChange={handleTextChange} />

        <label htmlFor="dateAdded">Date added:</label>
        <input type="text" id="dateAdded" value={show.dateAdded} onChange={handleTextChange} />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}
