// Shows
const URL = process.env.REACT_APP_API_BASE_URL;

// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  return;
}

// Index/Get all
export async function getAllShows() {
  const response = await fetch(`${URL}/shows`);
  const allShows = await response.json();
  return allShows;
}

// Show/Get one
export async function getOneShow(id) {
  const response = await fetch(`${URL}/shows/${id}`);
  const show = await response.json();
  return show;
}

// Update
export function updateShow(id, show) {
  return;
}

// Movies
export async function getAllMovies() {
  const response = await fetch(`${URL}/movies`);
  const allMovies = await response.json();
  return allMovies;
}

export async function getOneMovie(id) {
  const response = await fetch(`${URL}/movies/${id}`);
  const movie = await response.json();
  return movie;
}
