// * Shows
//  TODO: set base url to later use in code
//environmental variable
const URL = process.env.REACT_APP_API_BASE_URL

//  Create
export function createShow(show) {
  // method here creates a show in JSON format within the header
  // w/ a fetch of the info from the API
  const method = {
    method: "POST",
    body: JSON.stringify(show),
    header: { "Content-Type": "application/json" }
  }
  return fetch(`${URL}/shows`, method)
    .then((response) => response.json())
}

//  Delete
export function destroyShow(id) {
  // method : {} -> an object key to allow for the delete of a movie to occur
  return fetch(`${URL}/shows/${id}`, { method: "DELETE" })
}

//  Index/Get all
export function getAllShows() {
  //  return fetch ("http://localhost:5001/api/show") -> this could work as well

  // TODO: fetches the shows & then returns evaluting value --v 

  return fetch(`${URL}/shows`)
    .then((response) => response.json())

}

//  Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`)
    .then(response => response.json())


}

//  Update
export function updateShow(id, show) {
  const method = {
    method: "PUT",
    body: JSON.stringify(show),
    header: { "Content-Type": "application/json" }
  }
  return fetch(`${URL}/shows/${id}`, method)
    .then((response) => response.json())

}

// * Movies

// Index/Get All - Movies
export function getAllMovies(id) {
  return fetch(`${URL}/movies`)
    .then((response) => response.json())
}

// Create - Movies
export function createMovie(movie) {
  const method = {
    method: "POST",
    body: JSON.stringify(movie),
    header: { "Content-Type": "application/json" }
  }
  return fetch(`${URL}/movies`, method)
    .then((response) => response.json())

}

// Get One - Movie
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`)
    .then((response) => response.json)
}

// Delete - Movies
export function destroyMovie(id) {

  return fetch(`${URL}/movies/${id}`,
    { method: "DELETE" })
}

//Update - Movies 
export function updateMovie(id, movie) {
  const method = {
    method: "PUT",
    body: JSON.stringify(movie),
    header: { "Content-Type": "application/json" }
  }
  return fetch(`${URL}/movies/${id}`, method)
    .then((response) => response.json())


}