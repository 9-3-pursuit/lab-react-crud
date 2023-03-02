// Shows
//  TODO: set base url to later use in code
//environmental variable
const URL = process.env.REACT_APP_API_BASE_URL

// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  // method : {} -> an object key to allow for the delete of a movie to occur
  return fetch(`${URL}/shows/${id}`, { method: "DELETE" })
}

// Index/Get all
export function getAllShows() {
  //  return fetch ("http://localhost:5001/api/show") -> this could work as well

  // TODO: fetches the shows & then returns evaluting value --v 

  return fetch(`${URL}/shows`)
    .then((response) => response.json())

}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`)
    .then(response => response.json())


}

// Update
export function updateShow(id, show) {
  return;
}

// Movies

export function getAllMovies() {
  return;
}
