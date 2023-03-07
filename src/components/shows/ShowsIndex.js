import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import  ErrorMessage  from "../errors/ErrorMessage";
import { getAllShows } from "../../api/fetch";
import ShowListing from "./ShowListing";


import "./ShowsIndex.css";




export default function ShowsIndex() {

  const [shows, setShows] = useState([])
  const [error, setError] = useState(false)
  const [searchTitle, setSearchTitle] = useState("")
  const [allShows, setAllShows] = useState([])
  
  useEffect(()=> {
    getAllShows().then((response) => { setShows(response); setError(false); setAllShows(response)}).catch((error) => { setError(true)})
  },[])

  function filterShows(search, shows) {
    return shows.filter((show) => {
      return show.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  function handleTextChange(event) {
    setSearchTitle(event.target.value);
    const result = event.target.value.length ? filterShows(event.target.value, allShows) : allShows
    setShows(result);
  }

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
            {shows.map((show) =>  <ShowListing show={show}  key={show.id} />)}
          </section>
        </section>
      )}
    </div>
  );
}
