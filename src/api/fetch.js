const URL = process.env.REACT_APP_API_BASE_URL;

// Shows

// Create
export async function createMedia(mediaType, media) {
  const response = await fetch(`${URL}/${mediaType}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(media),
  });
  return response;
}

export async function destroyMedia(mediaType, mediaID) {
  const response = await fetch(`${URL}/${mediaType}/${mediaID}`, {
    method: "DELETE",
  });

  return response;
}

export async function getAllMedia(mediaType) {
  const response = await fetch(`${URL}/${mediaType}`);
  const allMedia = await response.json();
  return allMedia;
}

export async function getMedia(mediaType, mediaID) {
  const response = await fetch(`${URL}/${mediaType}/${mediaID}`);
  const media = await response.json();
  return media;
}

export async function updateShow(id, show) {
  const response = await fetch(`${URL}/shows/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(show),
  });
  return response;
}

// Movies

export async function createMovie(movie) {
  const response = await fetch(`${URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
  return response;
}

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
