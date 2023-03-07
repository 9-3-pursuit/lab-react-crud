// Shows
const base = process.env.REACT_APP_API_BASE_URL;
// Create
export function createShow(show) {
  return fetch(`${base}/shows/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // set the Content-Type header if sending JSON data
    },
    body: JSON.stringify(show), // include the data to be sent in the request body
  });
}

// Delete
export function destroyShow(id) {
  return fetch(`${base}/shows/${id}`, {
    method: "DELETE",
  });
}

// Index/Get all
export async function getAllShows() {
  const apiReponse = await fetch(`${base}/shows`);
  const jsonResponse = await apiReponse.json();

  return jsonResponse;
}

// Show/Get one
export async function getOneShow(id) {
  const apiReponse = await fetch(`${base}/shows/${id}`);
  const jsonResponse = await apiReponse.json();

  return jsonResponse;
}

// Update
export async function updateShow(id, show) {
  return fetch(`${base}/shows/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // set the Content-Type header if sending JSON data
    },
    body: JSON.stringify(show), // include the data to be sent in the request body
  });
}

// Movies
// Index/Get all
export async function getAllMovies() {
  const apiReponse = await fetch(`${base}/movies`);
  const jsonResponse = await apiReponse.json();

  return jsonResponse;
}

// Show/Get one
export async function getOneMovie(id) {
  const apiReponse = await fetch(`${base}/movies/${id}`);
  const jsonResponse = await apiReponse.json();

  return jsonResponse;
}

// Create
export function createMovie(show) {
  return fetch(`${base}/movies/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // set the Content-Type header if sending JSON data
    },
    body: JSON.stringify(show), // include the data to be sent in the request body
  });
}

// Update
export async function updateMovie(id, show) {
  return fetch(`${base}/movies/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // set the Content-Type header if sending JSON data
    },
    body: JSON.stringify(show), // include the data to be sent in the request body
  });
}

// Delete
export function destroyMovie(id) {
  return fetch(`${base}/movies/${id}`, {
    method: "DELETE",
  });
}
