// Shows
const URL = process.env.REACT_APP_API_BASE_URL;
// Create
export function createShow(show) {
  const method = {
    method: "POST",
    body: JSON.stringify(show), // will create a string object of our values in JSON
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows`, method).then((response) => response.json()); // when we create new show give us back our new tv show obj
}

// Delete
export function destroyShow(id) {
  return fetch(`${URL}/shows/${id}`, { method: "DELETE" }); // allows us to delete shows based on id input
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json()); // fetch returns an array of shows
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}

// Update
export function updateShow(id, show) {
  const method = {
    method: "PUT",
    body: JSON.stringify(show), // will create a string object of our values in JSON
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows/${id}`, method).then((response) =>
    response.json()
  );
}

// Movies

export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json());
}
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((response) => response.json());
}
export function destroyMovie(id) {
  return fetch(`${URL}/movies/${id}`, { method: "DELETE" });
}
export function createMovie(movie) {
  const method = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/movies`, method).then((response) => response.json());
}
export function updateMovie(id, movie) {
  const method = {
    method: "PUT",
    body: JSON.stringify(movie), // will create a string object of our values in JSON
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/movies/${id}`, method).then((response) =>
    response.json()
  );
}
