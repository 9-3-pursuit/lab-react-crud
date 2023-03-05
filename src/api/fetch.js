// // Shows

// // Create
// export function createShow(show) {
//   return;
// }

// // Delete
// export function destroyShow(id) {
//   return fetch(`URL}/shows${id}`, {method: "DELETE"})
// }

// // Index/Get all
// export function getAllShows() {
//   return fetch(`${URL}/shows`).then(response => response.json()); // fetch returns an array of shows in js
// }

// // Show/Get one
// export function getOneShow(id) {
//   return fetch(`${URL}/shows/{id}`).then(response => response.json());
// }

// // Update
// export function updateShow(id, show) {
//   return;
// }

// // Movies

// export function getAllMovies() {
//   return;
// }

// Shows
const URL = process.env.REACT_APP_API_BASE_URL;
// console.log(URL)
// Create
export function createShow(show) {
  const method = {
    method: "POST",
    body: JSON.stringify(show),
    headers: {"Content-Type": "application/json"}
  }
  return fetch(`${URL}/shows`, method).then(response => response.json());
}

// Delete
export function destroyShow(id) {
  return fetch(`${URL}/shows/${id}`, { method: "DELETE" });
}

// Index/Get all
export function getAllShows(data) {
  
  return fetch(`${URL}/shows`).then((response) => response.json()); // fetch returns an array of shows in JS
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}

// Update
export function updateShow(id, show) {
  const method = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: {"Content-Type": "application/json"}
  }
  return fetch(`${URL}/shows/${id}`,method).then((response) => response.json());
}

// Shows

// console.log(URL)
// Create
export function createMovie(movie) {
  const method = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: {"Content-Type": "application/json"}
  }
  return fetch(`${URL}/movies`, method).then(response => response.json());
}

// Delete
export function destroyMovie(id) {
  return fetch(`${URL}/movies/${id}`, { method: "DELETE" });
}

// Index/Get all
export function getAllMovies(data) {
  
  return fetch(`${URL}/movies`).then((response) => response.json()); // fetch returns an array of shows in JS
}

// Show/Get one
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((response) => response.json());
}

// Update
export function updateMovie(id, movie) {
  const method = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: {"Content-Type": "application/json"}
  }
  return fetch(`${URL}/movies/${id}`,method).then((response) => response.json());
}
