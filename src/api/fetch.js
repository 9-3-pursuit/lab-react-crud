// Shows

const URL = process.env.REACT_APP_API_BASE_URL

// Create
export function createShow(show) {
  
 
  return fetch(`${URL}/shows`, { method: "POST", body: JSON.stringify(show), headers: {"Content-Type": "application/json"}})
  .then((response) => response.json())
}

// Delete
export function destroyShow(id) {
  return  fetch(`${URL}/shows/${id}`, {method: "DELETE"});
  
}

// Index/Get all
export function getAllShows() {
  return  fetch(`${URL}/shows`).then((response)=> response.json());
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}

// Update
export function updateShow(id, show) {
  return fetch(`${URL}/shows/${id}`, { method: "PUT", body: JSON.stringify(show), headers: {"Content-Type": "application/json"}})
  .then((response) => response.json());
}

// Movies

export function getAllMovies() {
  return  fetch(`${URL}/movies`).then((response) => response.json());
}


export function createMovie(movie) {
  
  return fetch(`${URL}/movies`, { method: "POST", body: JSON.stringify(movie), headers: {"Content-Type": "application/json"}})
  .then((response) => response.json())
}

export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((response) => response.json());
}

export function destroyMovie(id) {
  return  fetch(`${URL}/movies/${id}`, {method: "DELETE"});
  
}

export function updateMovie(id, movie) {
  return fetch(`${URL}/movies/${id}`, { method: "PUT", body: JSON.stringify(movie), headers: {"Content-Type": "application/json"}})
  .then((response) => response.json());
}