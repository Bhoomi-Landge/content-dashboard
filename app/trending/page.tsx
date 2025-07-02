// 'use client'

// import { useSelector } from 'react-redux'
// import { RootState } from '@/store'
// import ContentCard from '@/components/ContentCard'

// export default function TrendingPage() {
//   const news = useSelector((state: RootState) => state.content.news)
//   const movies = useSelector((state: RootState) => state.movies.items)
//   const songs = useSelector((state: RootState) => state.spotify.items)

//   return (
//     <div className="p-6 space-y-12">
//       {/* NEWS SECTION */}
//       <div>
//         <h2 className="text-2xl font-bold mb-4">📰 Trending News</h2>
//         {news?.length ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {news.map((item, idx) => (
//               <ContentCard
//                 key={item.url || idx}
//                 title={item.title}
//                 description={item.description}
//                 imageUrl={item.urlToImage}
//                 url={item.url}
//                 type="news"
//                 data={item}
//               />
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500">No news available.</p>
//         )}
//       </div>

//       {/* MOVIES SECTION */}
//       <div>
//         <h2 className="text-2xl font-bold mb-4">🎬 Trending Movies</h2>
//         {movies?.length ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {movies.map((m: any) => (
//               <ContentCard
//                 key={`movie-${m.id}`}
//                 title={m.title}
//                 description={m.overview}
//                 imageUrl={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
//                 url=""
//                 type="movie"
//                 data={m}
//               />
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500">No movies available.</p>
//         )}
//       </div>

//       {/* SPOTIFY SECTION */}
//       <div>
//         <h2 className="text-2xl font-bold mb-4">🎵 Spotify New Releases</h2>
//         {songs?.length ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {songs.map((s: any) => (
//               <ContentCard
//                 key={`spotify-${s.id}`}
//                 title={s.name}
//                 description={
//                   Array.isArray(s.artists)
//                     ? s.artists.map((a: any) => a.name).join(', ')
//                     : s.artists
//                 }
//                 imageUrl={s.album?.images?.[0]?.url}
//                 url={s.external_urls?.spotify || ''}
//                 type="spotify"
//                 data={s}
//               />
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500">No Spotify tracks found.</p>
//         )}
//       </div>
//     </div>
//   )
// }






'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import ContentCard from '@/components/ContentCard'

export default function TrendingPage() {
  const news = useSelector((state: RootState) => state.content.news)
const tweets = useSelector((state: RootState) => state.content.tweets.items)
  const movies = useSelector((state: RootState) => state.movies.items)
  const songs = useSelector((state: RootState) => state.spotify.items)

  const [visibleNews, setVisibleNews] = useState(6)
  const [visibleTweets, setVisibleTweets] = useState(6)
  const [visibleMovies, setVisibleMovies] = useState(6)
  const [visibleSongs, setVisibleSongs] = useState(6)

  return (
    <div className="p-6 space-y-12">
      <Section
        title="📰 Trending News"
        items={(news || []).map((n) => ({
          id: n.url,
          title: n.title,
          description: n.description,
          imageUrl: n.urlToImage,
          url: n.url,
          type: 'news',
          data: n,
        })).slice(0, visibleNews)}
        onLoadMore={() => setVisibleNews(prev => prev + 6)}
        hasMore={visibleNews < (news?.length || 0)}
      />

    




<Section
  title="🐦 Trending Tweets"
  items={(tweets || []).map((t) => ({
    id: t.id,
    title: t.text.slice(0, 80) + '...',
    description: '',
    imageUrl: '/twitter.png',
    url: '',
    type: 'tweet',
    data: t,
  })).slice(0, visibleTweets)}
  onLoadMore={() => setVisibleTweets((prev) => prev + 6)}
  hasMore={visibleTweets < (tweets?.length || 0)}
/>


      <Section
        title="🎬 Trending Movies"
        items={(movies || []).map((m: any) => ({
          id: m.id.toString(),
          title: m.title,
          description: m.overview,
          imageUrl: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
          url: '',
          type: 'movie',
          data: m,
        })).slice(0, visibleMovies)}
        onLoadMore={() => setVisibleMovies(prev => prev + 6)}
        hasMore={visibleMovies < (movies?.length || 0)}
      />

      <Section
        title="🎧 Trending Songs"
        items={(songs || []).map((s: any) => ({
          id: s.id,
          title: s.name,
          description: Array.isArray(s.artists)
            ? s.artists.map((a: any) => a.name).join(', ')
            : s.artists,
          imageUrl: s.album?.images?.[0]?.url,
          url: s.external_urls?.spotify || '',
          type: 'spotify',
          data: s,
        })).slice(0, visibleSongs)}
        onLoadMore={() => setVisibleSongs(prev => prev + 6)}
        hasMore={visibleSongs < (songs?.length || 0)}
      />
    </div>
  )
}

function Section({
  title,
  items,
  onLoadMore,
  hasMore,
}: {
  title: string
  items: any[]
  onLoadMore: () => void
  hasMore: boolean
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <ContentCard
            // key={`${item.type}-${item.id}`}
              key={`${item.type}-${item.id}-${item.publishedAt || item.release_date || ''}`}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            url={item.url}
            type={item.type}
            data={item.data}
          />
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-6">
          <button
            onClick={onLoadMore}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}
