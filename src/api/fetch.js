
const URL = process.env.REACT_APP_API_BASE_URL;

export function createShow(show) {
  const method = {
    method: "POST",
    body: JSON.stringify(show), 
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows`, method).then((response) => response.json()); 
}


export function destroyShow(id) {
  return fetch(`${URL}/shows/${id}`, { method: "DELETE" }); 
}


export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json()); 
}


export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}


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
    body: JSON.stringify(movie), 
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/movies/${id}`, method).then((response) =>
    response.json()
  );
}