import { Link } from "react-router-dom";
// importing useState to add state to components
// importing useEffect to allow performance of side effects within components
import { useEffect, useState } from "react";
import { getAllShows } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "./ShowListing";

import "./ShowsIndex.css";

export default function ShowsIndex() {

  // initializing state value of error variable to false
  const [error, setError] = useState(false);
  // initializing state value of shows variable to empty array
  const [shows, setShows] = useState([]);

  // calling useEffect to call getAllShows function 
  useEffect(() => {
    getAllShows().then(response => {
      // using setShows function inside getAllShows to set value of shows variable to API response
      setShows(response);
      // using setError to ensure value of error variable is false 
      setError(false);
    }).catch((error) => {
      console.log(error)
      setError(true)
    })
  }, [])
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
              // value={searchTitle}
              id="searchTitle"
            // onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {shows.map(show => {
              return <ShowListing show={show} key={show.id} />
            })}
          </section>
        </section>
      )}
    </div>
  );
}
