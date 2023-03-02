import { Link } from "react-router-dom";

import ErrorMessage from "../errors/ErrorMessage";

import "./ShowsIndex.css";

// imports added via class
import ShowListing from "../shows/ShowListing"
import { getAllShows } from "../../api/fetch" //grabbing all shows; importing form fecth.js
import { useState, useEffect } from "react" // add in to use state


// TODO: @ some point in our code we should change error msg to true if there's an error

export default function ShowsIndex() {
  const [error, setError] = useState(false) // * state for error msg
  const [shows, setShows] = useState([]) // * state the array of shows
  const [searchTitle,setSearchTitle] = useState("")

  function handleTextChange(event){
    setSearchTitle(event.target.value)
  }

  //    TODO: in order what is happeneing from top of useEffect into the error return --v
  // will redener all the shows then set the shows as the selected response aka movie 
  //[] represents the empty array , no dependicies
  // if theres an error, you set the error to true otherwise the error will return false 

  useEffect(() => {
    getAllShows()

      // ! the final .then condition from the fetch in the fetch.js, 
      // ! it's finishing the promising & giving us access to the the desired return info
      .then(response => {
        setShows(response)
        setError(false) // correlates to the the return below, if it is false 

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
              // value={searchTitle}
              id="searchTitle"
            // onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {/* <!-- ShowListing components --> */}
            {shows.map(show => {
              return <ShowListing show={show} key={show.id}/>
            })}

            {/* show={show} key={show.id} */}
          </section>
        </section>
      )}
    </div>
  );
}
