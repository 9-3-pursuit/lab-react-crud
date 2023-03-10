import { resolvePath } from "react-router-dom";

const URL = process.env.REACT_APP_API_BASE_URL


// Shows

// Index/Get all
export function getAllShows() {
  // fetch returns an array of shows in JS
  return fetch(`${URL}/shows`)
    .then(response => response.json())
}

// Create
export function createShow(show) {
  // creating variable for object to create new TV show object
  const method = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" }
  };
  return fetch(`${URL}/shows`, method)
    .then(response => response.json())
}

// Show/Get one
export function getOneShow(id) {
  // fetch returns a single show
  return fetch(`${URL}/shows/${id}`)
    .then(response => response.json())
}

// Update
export function updateShow(id, show) {
  // creating variable for object to update new TV show object
  const method = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" }
  };
  return fetch`${URL}/shows${id}`;
}

// Delete
export function destroyShow(id) {
  // targeting specific show to delete, then adding an object with key/value pair of method: DELETE
  return fetch(`${URL}/shows${id}`, { method: "DELETE" })
}

// Movies

// index/get all
export function getAllMovies() {
  return fetch(`${URL}/movies`)
    .then(response => response.json())
}

// create
export function createMovie(movie) {
  // creating variable for object to create new TV show object
  const method = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" }
  };
  return fetch(`${URL}/movies`, method)
    .then(response => response.json())
}

// show/get one
export function getOneMovie(id) {
  // returning promise from fetch request
  return fetch(`${URL}/movies/${id}`)
    .then(response => response.json())
}

// update
export function updateMovie(id, movie) {
  // creating variable for object to update new TV show object
  const method = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" }
  };
  return fetch(`${URL}/movies/${id}`, method)
    .then(response => response.json())
}

// delete
export function destroyMovie(id) {
  // targeting specific movie to delete, then adding an object with key/value pair of method: DELETE
  return fetch(`${URL}/movies/${id}`, { method: "DELETE" })
}