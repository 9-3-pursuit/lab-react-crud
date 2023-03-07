import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllShows } from "../../api/fetch";
import ShowListing from "./ShowListing"

import ErrorMessage from "../errors/ErrorMessage";

import "./ShowsIndex.css";

function filterShows(search, shows){
  return shows.filter((show) => {
    return show.title.toLowerCase().includes(search.toLowerCase());
  })
}

export default function ShowsIndex() {

  const [shows, setShows] = useState([]);
  const [error, setError] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const[allShows, setAllShows] = useState([]);


  function handleTextChange(event){
    const title = event.target.value;
    setSearchTitle(title);
    const result = title.length ? filterShows(title, allShows) : allShows;
    setShows(result)
  }

  useEffect(() => {
    getAllShows().then((response) => {
      setShows(response);
      setAllShows(response);
      
      setError(false);
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
              value = {searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            
            {shows.map((show) => {
              return <ShowListing show ={show} key={show.id} />
            })}
          </section>
        </section>
      )}
    </div>
  );
}
