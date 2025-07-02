// src/services/fetchTMDB.ts
import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    params: {
      language: 'en-US',
    },
  })
  return response.data.results
}

export const fetchGenres = async () => {
  const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    params: {
      language: 'en-US',
    },
  })
  return response.data.genres
}
