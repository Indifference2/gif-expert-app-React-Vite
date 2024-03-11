const apiKey = 'fkCqBGcnNOJD6O9vNDbQ3y8RsZlJcxtd'


export const getGifs = async(category) => {

  const params = {
    api_key : apiKey,
    q : category,
    limit: 10,
  }

  const url = `https://api.giphy.com/v1/gifs/search`
  const resp = await fetch(url + '?' + new URLSearchParams(params))
  const {data} = await resp.json()
  
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  return gifs
}