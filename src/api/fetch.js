// Shows
const URL = process.env.REACT_APP_API_BASE_URL
// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  return fetch (`${URL}/shows/${id}` , {method: "delete"}) 
} 

// Index/Get all
export function getAllShows() {
  return fetch (`${URL}/shows`).then((results) => results.json())
}

// Show/Get one
export function getOneShow(id) {
  return fetch (`${URL}/shows/${id}`).then((results) => results.json())
}

// Update
export function updateShow(id, show) {
  return;
}

// Movies

export function getAllMovies() {
  return fetch (`${URL}/movies`).then((results) => results.json())
}
