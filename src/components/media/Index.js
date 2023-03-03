import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllMovies, getAllShows } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import Listing from "./Listing";
import "./Index.css";

export default function Index({ type }) {
  const [error, setError] = useState(false);
  const [mediaList, setMediaList] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(handleFetchEffect(setMediaList, setError, type), [type]);

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
          <h2>All {type}</h2>
          <button>
            <Link to={`/${type.toLowerCase()}/new`}>
              Add a new {type.toLowerCase().slice(0, -1)}
            </Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search {type}:
            <input
              type="text"
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {mediaList
              .filter((media) =>
                media.title.toLowerCase().includes(searchTitle)
              )
              .map((media) => (
                <Listing key={media.id} media={media} type={type} />
              ))}
          </section>
        </section>
      )}
    </div>
  );
}

const handleFetchEffect = (setMediaList, setError, type) => () => {
  let ignore = false;
  const fetchData = async () => {
    if (!ignore) {
      try {
        const response = await (type === "Movies"
          ? getAllMovies()
          : getAllShows());
        const validResponses = response.filter(
          (media) =>
            Object.hasOwn(media, "id") &&
            Object.hasOwn(media, "type") &&
            Object.hasOwn(media, "title")
        );
        setMediaList(validResponses);
      } catch (error) {
        setError(true);
      }
    }
  };
  fetchData();

  return () => (ignore = true);
};
