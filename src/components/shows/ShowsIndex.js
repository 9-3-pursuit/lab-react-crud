import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllShows } from "../../api/fetch";

import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "./ShowListing";

import "./styles/ShowsIndex.css";

export default function ShowsIndex() {
  const [error, setError] = useState(false);
  const [shows, setShows] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    getAllShows()
      .then((data) => setShows(data))
      .catch((catchError) => {
        console.log(catchError);
        setError(true);
      });
  }, []);

  const handleTextChange = (event) => {
    const { value } = event.target;
    setSearchTitle(value);
  };

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
            <input type="text" value={searchTitle} id="searchTitle" onChange={handleTextChange} />
          </label>
          <section className="shows-index">
            {shows.map((show) => {
              return <ShowListing show={show} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}
