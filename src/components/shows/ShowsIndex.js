import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllShows } from "../../api/fetch.js";
import ErrorMessage from "../errors/ErrorMessage";

import "./ShowsIndex.css";
import ShowListing from "./ShowListing.js";

export default function ShowsIndex() {
  const [error, setError] = useState(false);
  const [shows, setShows] = useState([]);
  const [allShows, setAllShows] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  function handleTextChange(event) {
    setSearchTitle(event.target.value);
    const filteredShows = allShows.filter((show) => {
      return show.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setShows(filteredShows);
  }

  useEffect(() => {
    getAllShows()
      .then((response) => {
        setAllShows(response);
        setShows(response);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  return (
    <div>
      {error ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Shows</h2>
          <button>
            <Link to="/shows/new">Add a new show</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Shows:
            <input
              type="text"
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {shows.map((show) => {
              return <ShowListing show={show} key={show.id} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}
