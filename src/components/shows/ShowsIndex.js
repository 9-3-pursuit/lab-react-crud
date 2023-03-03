import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getAllShows} from "../../api/fetch.js"
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "./ShowListing.js"
import "./ShowsIndex.css";

//let navigate = useNavigate();
function filterShows(search, shows){
 return shows.filter((show)=>
 show.title.toLowerCase().includes(search.toLowerCase())
 )
}


export default function ShowsIndex() {
  const [error, setError] = useState(false);
  const [shows, setShows] = useState([]);
  const [allShows, setAllShows] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
   
  
  function handleTextChange(e){
    setSearchTitle(e.target.value);
    const result = e.target.value.length ? filterShows(e.target.value, allShows) : allShows;
    setShows(result);
  }

  useEffect(()=>{
    getAllShows().then(res => {
      setAllShows(res);
      setShows(res);
      setError(false);
    }).catch((error)=>{
      console.log(error)
      setError(true)
    })
  },[])

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
            {shows.map((show)=>{
              return <ShowListing key={show.id} show={show}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}

