export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=kj9acQCS5TVAPROlyZfOZ9f2Sxb9rQfA&q=${category}&limit=20&offset=0&rating=g`
  const resp = await fetch(url);
  const {data = []} = await resp.json();
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  return gifs;
}
