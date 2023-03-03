import { resolvePath } from "react-router-dom";

// Shows
const URL = process.env.REACT_APP_API_BASE_URL


// Create
export function createShow(show) {
  // creating variable store data for object to create new TV show object
  const method = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" }
  };
  return fetch(`${URL}/shows`, method);
}

// Delete
export function destroyShow(id) {
  // targeting specific show to delete, then adding an object with key/value pair of method: DELETE
  return fetch(`${URL}/shows${id}`, { method: "DELETE" })
}

// Index/Get all
export function getAllShows() {
  // fetch returns an array of shows in JS
  return fetch(`${URL}/shows`)
    .then(response => response.json())
}

// Show/Get one
export function getOneShow(id) {
  // fetch returns an single show
  return fetch(`${URL}/shows/${id}`)
    .then(response => response.json())
}

// Update
export function updateShow(id, show) {
  // creating variable store data for object to update new TV show object
  const method = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" }
  };
  return fetch`${URL}/shows${id}`;
}

// Movies

// index/get all
export function getAllMovies() {
  return fetch(`${URL}/movies`)
    .then(response => response.json())
}
