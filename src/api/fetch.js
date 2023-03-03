// Shows 
const URL = process.env.REACT_APP_API_BASE_URL

// Create Show
export function createShow(show) {
  return;
}

// Delete Show
export function destroyShow(id) {
  return fetch(`${URL}/shows/${id}`, {method: "DELETE"})
}

// Index/Get all Shows
export function getAllShows() {
  return fetch(`${URL}/shows`)
  .then(response => response.json()) // fetch returns an array of shows in JS.
}

// Show/Get one Show
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`)
  .then(response => response.json()) 
}

// Update Shows
export function updateShow(id, show) {
  return fetch(`${URL}/shows/${id} ${show}`, {method: "UPDATE"})
  //.then(response => response.json()) 
}

// Movies
//const MoviesURL = process.env.REACT_APP_API_BASE_URL

// Create Movie
export function createMovie(movie) {
  return;
}

// Delete Movie
export function destroyMovie(id) {
  return fetch(`${URL}/movies/${id}`, {method: "DELETE"})
}

// Index/Get all Movies
export function getAllMovies() {
  return fetch(`${URL}/movies`)
  .then(response => response.json()) // fetch returns an array of movies in JS.
}

// Movie/Get one Movie
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`)
  .then(response => response.json()) 
}

// Update Movies
export function updateMovie(id, movie) {
  return fetch(`${URL}/movies/${id} ${movie}`, {method: "UPDATE"})
}
