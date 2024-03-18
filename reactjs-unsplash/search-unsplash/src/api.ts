const searchImages = async (term = "dogs") => {
  const URI = import.meta.env.VITE_UNSPLASH_URI;
  const searchTerm = new URLSearchParams(term);
  const QUERY = `${URI}/search/photos?query=${searchTerm}`;
  const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  const options = {
    headers: {
      method: "GET",
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  };
  const response = await fetch(QUERY, options);
  return await response.json();
};
export { searchImages };
