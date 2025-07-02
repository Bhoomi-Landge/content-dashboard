// src/components/MovieDetail.tsx
'use client'

import Image from 'next/image'

type Props = {
  movie: any
}

export default function MovieDetail({ movie }: Props) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg"
      />
      <p className="mt-4">{movie.overview}</p>
      <p className="mt-2 text-gray-500">Release Date: {movie.release_date}</p>
      <p className="mt-2 text-yellow-500">Rating: {movie.vote_average} ⭐</p>
      <p className="mt-2 text-sm text-gray-600">
        Genres: {movie.genres?.map((g: any) => g.name).join(', ')}
      </p>
    </div>
  )
}
