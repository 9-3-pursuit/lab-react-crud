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
  const shows = await response.json();
  return shows;
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

export function getAllMovies() {
  return;
}
