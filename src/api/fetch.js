// Shows
const base = process.env.REACT_APP_API_BASE_URL;
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
export async function updateShow(id, show) {}

// Movies

export async function getAllMovies() {
  const apiReponse = await fetch(`${base}/movies`);
  const jsonResponse = await apiReponse.json();

  return jsonResponse;
}
