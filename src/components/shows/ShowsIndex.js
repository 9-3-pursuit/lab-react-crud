import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "./ShowListing";
import { getAllShows } from "../../api/fetch";
import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [error, setError] = useState(false);
  const [shows, setShows] = useState([]);

  useEffect(handleFetchEffect(setShows, setError), []);

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
            {shows.map((show) => (
              <ShowListing show={show} />
            ))}
          </section>
        </section>
      )}
    </div>
  );
}

const handleFetchEffect = (setShows, setError) => () => {
  let ignore = false;
  const fetchData = async () => {
    if (!ignore) {
      try {
        const response = await getAllShows();
        setShows(response);
      } catch (error) {
        setError(true);
      }
    }
  };
  fetchData();

  return () => (ignore = true);
};
