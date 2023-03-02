import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "./ShowListing";
import { getAllShows } from "../../api/fetch";
import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [error, setError] = useState(false);
  const [shows, setShows] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(handleFetchEffect(setShows, setError), []);

  const handleTextChange = (e) => {
    const newValue = e.target.value.toLowerCase();
    setSearchTitle(newValue);
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
            <input
              type="text"
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {shows
              .filter((show) => show.title.toLowerCase().includes(searchTitle))
              .map((show) => (
                <ShowListing key={show.id} show={show} />
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
        const validResponses = response.filter(
          (show) =>
            Object.hasOwn(show, "id") &&
            Object.hasOwn(show, "type") &&
            Object.hasOwn(show, "title")
        );
        setShows(validResponses);
      } catch (error) {
        setError(true);
      }
    }
  };
  fetchData();

  return () => (ignore = true);
};
