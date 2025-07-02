// app/movie/[id]/page.tsx
import axios from 'axios'
import MovieDetail from '@/components/MovieDetail'

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN

export default async function MovieDetailPage({ params }: { params: { id: string } }) {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    params: {
      language: 'en-US',
    },
  })

  return <MovieDetail movie={res.data} />
}
