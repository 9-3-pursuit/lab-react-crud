import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllShows } from "../../api/fetch";
import ShowListing from "../shows/ShowListing";
import ErrorMessage from "../errors/ErrorMessage";

import "./ShowsIndex.css";

function filterShows(search, shows) {
  shows.filter((show) => {
    console.log(show.title.toLowerCase().includes(search.toLowerCase()))
    return show.title.toLowerCase().includes(search.toLowerCase());
  }); 
}

export default function ShowsIndex() {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [allShows, setAllShows] = useState([]);

  function handleTextChange(event) {
    setSearchTitle(event.target.value);
    const filteredResult = event.target.value.length ? filterShows(event.target.value, allShows) : allShows
    setShows(filteredResult);
  }

  useEffect(() => {
    getAllShows()
      .then((results) => {
        setShows(results);
        setAllShows(results);
        setError(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
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
