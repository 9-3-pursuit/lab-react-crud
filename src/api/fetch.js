// Shows
const URL = process.env.REACT_APP_API_BASE_URL;

// Create
export function createShow(show) {
  const method = {
    method: "POST",
    body: JSON.stringify(show),
    headers: {"Content-Type": "application/json"},
  }
  return fetch(`${URL}/shows`, method).then((res) => res.json()) ;
}

// Delete
export function destroyShow(id) {
  return fetch(`${URL}/shows/${id}`, {method: "DELETE"});
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((res) => res.json());
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((res) => res.json());
}

// Update
export function updateShow(id, show) {
  const method = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: {"Content-Type": "application/json"},;
}
  return fetch(`${URL}/shows/${id}`, method).then((res) => res.json());

// Movies

export function getAllMovies() {
  return fetch(`${URL}/movies`).then((res) => res.json());
}

// Create

export function createMovie(movie) {
  const method = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: {"Content-Type": "application/json"},
  }
  return fetch(`${URL}/movies`, method).then((res) => res.json()) ;
}

// Update

export function updateMovie(id, movie) {
  const method = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: {"Content-Type": "application/json"},
}
  return fetch(`${URL}/movies/${id}`, method).then((res) => res.json());}

  // Delete

  export function destroyMovie(id) {
  return fetch(`${URL}/movies/${id}`, {method: "DELETE"});
}

// Get one

export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((res) => res.json());
}