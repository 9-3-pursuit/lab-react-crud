const URL = process.env.REACT_APP_API_BASE_URL;

// Shows

// Create
export function createShow(show) {
  const response = fetch(`${URL}/shows`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(show),
  });
  return response;
}

// Delete
export async function destroyShow(showID) {
  const response = await fetch(`${URL}/shows/${showID}`, {
    method: "DELETE",
  });

  return response;
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
  const response = fetch(`${URL}/shows/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(show),
  });
  return response;
}

// Movies
export const createMovie = (movie) => {
  const response = fetch(`${URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  return response;
};

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
