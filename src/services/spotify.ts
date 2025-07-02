import axios from 'axios'

const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!

const getAccessToken = async () => {
  const res = await axios.post(
    'https://accounts.spotify.com/api/token',
    'grant_type=client_credentials',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
      },
    }
  )
  return res.data.access_token
}

export const fetchTopTracks = async () => {
  const token = await getAccessToken()
  const res = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data.albums.items.map((album: any) => ({
    id: album.id,
    title: album.name,
    artist: album.artists[0].name,
    albumArt: album.images[0].url,
  }))
}
