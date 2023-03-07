import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import { getAllShows } from "../../api/fetch"
import ShowListing from "./ShowListing"
import "./ShowsIndex.css";

function filterShows(search, shows) {
  return shows.filter(show => {
    return show.title.toLowerCase().includes(search.toLowerCase())
  })
}

export default function ShowsIndex() {
  const [error, setError] = useState(false)
  const [shows, setShows] = useState([])
  const [allShows, setAllShows] = useState([])
  const [searchTitle, setSearchTitle] = useState("")
 
  function handleTextChange(event){
    setSearchTitle(event.target.value);
     const filteredShows = filterShows(event.target.value, allShows)
     const result = event.target.value.length ? filteredShows : allShows 
     setShows(result);
    
  }
  useEffect(() => {
    getAllShows().then(response => {
      setAllShows(response)
      setShows(response);  
      setError(false)
    })
      .catch((error) => {
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
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {shows.map((show) => {
            return <ShowListing show={show} key={show.id} />})}
          </section>
        </section>
      )}
    </div>
  );
}
