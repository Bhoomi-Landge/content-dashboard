// 'use client'

// import { useSelector } from 'react-redux'
// import { RootState } from '@/store'
// import ContentCard from '@/components/ContentCard'

// export default function TrendingPage() {
//   const news = useSelector((state: RootState) => state.content.news)
//   const tweets = useSelector((state: RootState) => state.content.tweets.items)
//   const movies = useSelector((state: RootState) => state.movies.items)
//   const songs = useSelector((state: RootState) => state.spotify.items) as any[]

//   const normalizedItems = [
//     ...(news || []).map((n) => ({
//       id: n.url,
//       title: n.title,
//       description: n.description,
//       imageUrl: n.urlToImage,
//       date: new Date(n.publishedAt),
//       type: 'news' as const,
//       url: n.url,
//       data: n,
//     })),
//     ...(Array.isArray(tweets) ? tweets : []).map((t) => ({
//       id: t.id,
//       title: t.text.slice(0, 80) + '...',
//       description: '',
//       imageUrl: '/twitter.png',
//       date: new Date(t.created_at),
//       type: 'tweet' as const,
//       url: '',
//       data: t,
//     })),
//     ...(Array.isArray(movies) ? movies : []).map((m: any) => ({
//       id: m.id.toString(),
//       title: m.title,
//       description: m.overview,
//       imageUrl: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
//       date: new Date(m.release_date),
//       type: 'movie' as const,
//       url: '',
//       data: m,
//     })),
//     ...(Array.isArray(songs) ? songs : []).map((s) => ({
//       id: s.id,
//       title: s.name,
//       description: s.artists.map((a: any) => a.name).join(', '),
//       imageUrl: s.album.images?.[0]?.url,
//       date: new Date(s.album.release_date),
//       type: 'spotify' as const,
//       url: s.external_urls?.spotify || '',
//       data: s,
//     })),
//   ]
//     .filter((item) => item.date instanceof Date && !isNaN(item.date.getTime()))
//     .sort((a, b) => b.date.getTime() - a.date.getTime())

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">🔥 Trending Now</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {normalizedItems.map((item) => (
//           <ContentCard
//             key={`${item.type}-${item.id}`}
//             title={item.title}
//             description={item.description}
//             imageUrl={item.imageUrl}
//             url={item.url}
//             type={item.type}
//             data={item.data}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }
