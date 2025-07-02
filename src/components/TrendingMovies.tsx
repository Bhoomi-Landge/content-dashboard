'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../store/favoritesSlice'
import { RootState } from '@/store'

import { fetchGenres, fetchTrendingMovies } from '@/services/fetchTMDB'

type Movie = {
  id: number
  title: string
  poster_path: string
  release_date: string
}

type Genre = {
  id: number
  name: string
}

const BASE_URL = 'https://api.themoviedb.org/3'
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN

export default function TrendingMovies() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [genres, setGenres] = useState<Genre[]>([])
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null)
  const [page, setPage] = useState(1)

  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorites.items)

  useEffect(() => {
    if (ACCESS_TOKEN) {
      fetchGenres().then(setGenres)
    }
    fetchTrendingMovies().then(setMovies)
  }, [])

  useEffect(() => {
    const fetchByGenre = async () => {
      const res = await axios.get(
        selectedGenre ? `${BASE_URL}/discover/movie` : `${BASE_URL}/trending/movie/week`,
        {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
          params: {
            page,
            ...(selectedGenre && { with_genres: selectedGenre }),
            language: 'en-US',
          },
        }
      )
      setMovies((prev) => [...prev, ...res.data.results])
    }

    fetchByGenre()
  }, [selectedGenre, page])

  const handleFavorite = (movie: Movie) => {
    dispatch(toggleFavorite({ id: movie.id, type: 'movie', data: movie }))
  }

  const isFavorited = (id: number) =>
    favorites.some((f) => Number(f.id) === id && f.type === 'movie')

  return (
    <>
      <div className="mt-10 px-4">
        <h2 className="text-2xl font-bold mb-4">🎬 Trending Movies</h2>

        <select
          className="mb-6 p-2 border rounded dark:bg-gray-700 dark:text-white"
          value={selectedGenre || ''}
          onChange={(e) => setSelectedGenre(Number(e.target.value) || null)}
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
{movies.map((movie, index) => (
  <div
key={`${movie.id}-${index}`}


    className="relative bg-white dark:bg-gray-800 p-3 rounded shadow hover:shadow-lg transition cursor-pointer"
  >
    {/* ⭐ Favorite Button */}
    <div className="absolute top-2 right-2 bg-black/50 p-1 rounded-full">
      <FaStar
        onClick={() => handleFavorite(movie)}
        className={`text-xl cursor-pointer transition-transform ${
          isFavorited(movie.id)
            ? 'text-yellow-400'
            : 'text-white/80 hover:text-yellow-300'
        } hover:scale-110 hover:drop-shadow-[0_0_6px_gold]`}
      />
    </div>

    <Link href={`/movie/${movie.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="w-full rounded-md mb-2"
      />
      <h3 className="text-md font-semibold text-center">{movie.title}</h3>
    </Link>
  </div>
))}
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-red-700 transition"
        >
          Load More Movies
        </button>
      </div>
    </>
  )
}
