import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllShows } from "../../api/fetch";

import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "./ShowListing";

import "./styles/ShowsIndex.css";

export default function ShowsIndex() {
  const [error, setError] = useState(false);
  const [shows, setShows] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [deletedShowTitle, setDeletedShowTitle] = useState("");

  const location = useLocation();
  const showTitleDeleted = location.state?.deletedShowTitle;
  // the `useEffect` hook allows us to run code when the component mounts
  // the second argument is an array of dependencies
  // So this means that the code inside the callback function of the
  // `useEffect` hook will only run when the component mounts
  // `mounts` means that the component is first rendered to the DOM
  useEffect(() => {
    // using the `location` object from the `useLocation` hook
    // we can access the `state` property
    // the `state` property is an object that we can use to pass data
    // from one component to another
    // in this case we are passing the `deletedShowTitle` from the `Show` component
    // to the `ShowsIndex` component
    setDeletedShowTitle(showTitleDeleted || "");

    getAllShows()
      .then((data) => setShows(data))
      .catch((catchError) => {
        console.log(catchError);
        setError(true);
      });
  }, [showTitleDeleted]);

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
          <h1>{deletedShowTitle ? `${deletedShowTitle} was deleted from our records.` : null}</h1>
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
