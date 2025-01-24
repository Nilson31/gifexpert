export const getGifs = async (category) => {
  const limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=aJ4KVcQKfqWmQ7KMRaadZxhBINFPbCGd&q=${category}&limit=${limit}`;

  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img, index) => ({
    id: img.id || "Sin Id",
    title: img.title || "Sin Titulo",
    url: img.images.downsized_medium?.url,
  }));

  return gifs;
};
