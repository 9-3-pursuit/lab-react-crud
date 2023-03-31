// Shows
const URL = process.env.REACT_APP_API_BASE_URL;
// Create
export function createShow(show) {
const method = {
  method : "POST",
  body : JSON.stringify(show),
  headers : {"Content-Type": "application/json" },
};
const options = {method:"DELETE"}
return fetch(`${URL}/shows/${id}`, options);
}

// Delete
export function destroyShow(id) {
  return fetch(`${URL}/shows/${id}`,{method : "DELETE"});

}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
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


// Create
export function createMovie(movie) {
  const options = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/movies/`, options).then((response) => {
    return response.json();
  });
}
// Delete

export function destroyMovie(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/movies/${id}`, options);
}


// Movie/Get one
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((response) => response.json());
}


// Update
export function updateMovie(id, movie) {
  const options = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/movies/${id}`, options).then((response) => {
    return response.json();
  });
}
