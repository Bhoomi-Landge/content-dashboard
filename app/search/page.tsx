'use client'

import { useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store'
import ContentCard from '@/components/ContentCard'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')?.toLowerCase() || ''

  const news = useSelector((state: RootState) => state.content.news)
  const tweets = useSelector((state: RootState) => state.content.tweets.items)
  const movies = useSelector((state: RootState) => state.movies.items)
  const songs = useSelector((state: RootState) => state.spotify.items)

  const filteredNews = news.filter(
    (n) =>
      n.title?.toLowerCase().includes(query) ||
      n.description?.toLowerCase().includes(query)
  )

  const filteredTweets = tweets.filter((t) =>
    t.text?.toLowerCase().includes(query)
  )

  const filteredMovies = movies.filter((m) =>
    m.title?.toLowerCase().includes(query)
  )

  const filteredSongs = songs.filter((s) =>
    s.name?.toLowerCase().includes(query) ||
    s.artists?.some((a: any) => a.name.toLowerCase().includes(query))
  )

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold mb-4">
        🔍 Search Results for: <span className="text-blue-600">{query}</span>
      </h1>

      <Section title="📰 News" items={filteredNews.map((n) => ({
        id: n.url,
        title: n.title,
        description: n.description,
        imageUrl: n.urlToImage,
        url: n.url,
        type: 'news',
        data: n,
      }))} />

      <Section title="🐦 Tweets" items={filteredTweets.map((t) => ({
        id: t.id,
        title: t.text.slice(0, 80) + '...',
        description: '',
        imageUrl: '/twitter.png',
        url: '',
        type: 'tweet',
        data: t,
      }))} />

      <Section title="🎬 Movies" items={filteredMovies.map((m) => ({
        id: m.id,
        title: m.title,
        description: m.overview,
        imageUrl: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
        url: '',
        type: 'movie',
        data: m,
      }))} />

      <Section title="🎧 Songs" items={filteredSongs.map((s) => ({
        id: s.id,
        title: s.name,
        description: s.artists.map((a: any) => a.name).join(', '),
        imageUrl: s.album?.images?.[0]?.url,
        url: s.external_urls?.spotify,
        type: 'spotify',
        data: s,
      }))} />
    </div>
  )
}

function Section({
  title,
  items,
}: {
  title: string
  items: {
    id: string
    title: string
    description: string
    imageUrl?: string
    url: string
    type: 'news' | 'tweet' | 'movie' | 'spotify'
    data: any
  }[]
}) {
  if (!items.length) return null

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ContentCard
            key={`${item.type}-${item.id}`}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            url={item.url}
            type={item.type}
            data={item.data}
          />
        ))}
      </div>
    </div>
  )
}
