import { getAllMovies } from "../../api/fetch";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import { MovieListing } from "./MovieListing.js";
import { Link } from "react-router-dom";
import "./MoviesIndex.css";

function filterMovies(search, movies) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });
}