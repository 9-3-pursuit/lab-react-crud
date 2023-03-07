export const filterMediaByTitle = (mediaList, title) => {
  return mediaList.filter((media) => media.title.toLowerCase().includes(title.toLowerCase()));
};
