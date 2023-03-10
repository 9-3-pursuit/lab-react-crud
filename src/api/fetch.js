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

export async function updateMedia(mediaType, mediaID, media) {
  const response = await fetch(`${URL}/${mediaType}/${mediaID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(media),
  });
  return response;
}
