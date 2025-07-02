
// import { NextResponse } from 'next/server'

// const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
// const TMDB_API_KEY = process.env.TMDB_API_KEY
// const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
// const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET

// export async function GET() {
//   try {
//     // --- 1. NEWS ---
//     const newsRes = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=6`, {
//       headers: { 'X-Api-Key': NEWS_API_KEY! },
//     })
//     const newsData = await newsRes.json()
//     const news = newsData.articles || []

//     // --- 2. MOVIES ---
//     const movieRes = await fetch(
//       `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`
//     )
//     const movieData = await movieRes.json()
//     const movies =
//       movieData.results?.map((m: any) => ({
//         id: m.id,
//         title: m.title,
//         overview: m.overview,
//         poster_path: m.poster_path,
//         release_date: m.release_date,
//         vote_average: m.vote_average,
//       })) || []

//     // --- 3. SPOTIFY TOKEN ---
//     const authBuffer = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString(
//       'base64'
//     )

//     const spotifyTokenRes = await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         Authorization: `Basic ${authBuffer}`,
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: 'grant_type=client_credentials',
//     })

//     const tokenData = await spotifyTokenRes.json()
//     const accessToken = tokenData.access_token

//     // --- 4. SPOTIFY TRACKS ---
//     const spotifyRes = await fetch(`https://api.spotify.com/v1/browse/new-releases?limit=10`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     })

//     const spotifyData = await spotifyRes.json()

//     const spotifyTracks =
//       spotifyData.albums.items?.map((item: any) => ({
//         id: item.id,
//         name: item.name,
//         artists: item.artists, // ✅ Keep array for frontend to map
//         album: {
//           release_date: item.release_date, // ✅ FIXED from item.album.release_date
//           images: item.images, // ✅ FIXED from item.album.images
//         },
//         external_urls: item.external_urls,
//       })) || []

//     return NextResponse.json({ news, movies, spotifyTracks })
//   } catch (err) {
//     console.error('[🔥 /api/trending error]', err)
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
//   }
// }
// ✅ File: app/api/trending/route.ts

import { NextResponse } from 'next/server'

const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY
const TMDB_API_KEY = process.env.TMDB_API_KEY
const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET

export async function GET() {
  try {
    // 1. 🗞 Fetch News
    const newsRes = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=6`, {
      headers: { 'X-Api-Key': NEWS_API_KEY! },
    })
    const newsData = await newsRes.json()
    const news = newsData.articles || []
    // In app/api/trending/route.ts
const TMDB_API_KEY = process.env.TMDB_API_KEY

if (!TMDB_API_KEY) {
  console.warn('TMDB_API_KEY is missing in env. Returning mock data')
  return NextResponse.json({
    news: [],
    movies: [{ id: 1, title: 'Mock Movie', overview: 'Test movie overview', poster_path: null }],
    spotifyTracks: [],
  })
}


    // 2. 🎬 Fetch Movies from TMDB (v3 API)
    const movieRes = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`)
    const movieData = await movieRes.json()
    const movies = movieData.results?.map((m: any) => ({
      id: m.id,
      title: m.title,
      overview: m.overview,
      poster_path: m.poster_path,
      release_date: m.release_date,
      vote_average: m.vote_average,
    })) || []

    // 3. 🎵 Get Spotify Access Token
    const authBuffer = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')
    const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${authBuffer}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    })
    const tokenData = await tokenRes.json()
    const accessToken = tokenData.access_token

    // 4. 🎶 Fetch Spotify New Releases
    const spotifyRes = await fetch(`https://api.spotify.com/v1/browse/new-releases?limit=10`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const spotifyData = await spotifyRes.json()
    const spotifyTracks = spotifyData.albums.items?.map((item: any) => ({
      id: item.id,
      name: item.name,
      artists: item.artists, // keep original array; handle `.map` in frontend
      album: {
        release_date: item.release_date,
        images: item.images,
      },
      external_urls: item.external_urls,
    })) || []

    return NextResponse.json({ news, movies, spotifyTracks })
  } catch (err) {
    console.error('[🔥 /api/trending error]', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
