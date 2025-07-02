// 'use client'

// import { useSelector } from 'react-redux'
// import Link from 'next/link'
// import type { RootState } from '@/store'
// import type { NewsItem } from '@/slices/contentSlice'

// const ContentFeed = () => {
//  const news = useSelector((state: RootState) => state.content.news) || []


//   return (
//     <div className="mt-10 px-4">
//       <h2 className="text-2xl font-bold mb-4">📰 Trending News</h2>

//      {!news || news.length === 0 ? (

//         <div className="text-gray-500 dark:text-gray-400">No news available.</div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {news.map((item: NewsItem, idx: number) => (
//             <div
//               key={item.url || idx}
//               className="relative p-4 bg-gray-100 rounded dark:bg-gray-800 shadow hover:shadow-lg transition"
//             >
//               <Link href={item.url} target="_blank" rel="noopener noreferrer">
//           {item.urlToImage && (
//             <img
//               src={item.urlToImage}
//               alt={item.title}
//               className="w-full h-40 object-cover rounded mb-3"
//             />
//           )}
//           <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
//           <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
//             {item.description}
//           </p>
//           <p className="text-xs text-gray-500 dark:text-gray-400">
//             {item.source.name} • {new Date(item.publishedAt).toLocaleDateString()}
//           </p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default ContentFeed






















// // 'use client'

// // import { useSelector } from 'react-redux'
// // import Link from 'next/link'
// // import type { RootState } from '@/store'
// // import TweetItem, { NewsItem } from '@/slices/contentSlice'
// // // If you also need NewsItem, import it accordingly based on its export in contentSlice
// // import ContentCard from './ContentCard'
// // import { useState } from 'react'

// // const ContentFeed = () => {
// //   const news = useSelector((state: RootState) => state.content.news) || []
// //   const tweets = useSelector((state: RootState) => state.content.tweets?.items || []) // Ensure tweets exists
// //   const [visibleTweets, setVisibleTweets] = useState(6)

// //   // If you do not have a search slice, default to an empty string
// //   const searchQuery = '' // or useSelector(...) if you add a search slice

// // //const filteredNews = news
// // // Optionally, filter news if searchQuery is not empty
// // // .filter((item) =>
// // //   item.title?.toLowerCase().includes(searchQuery) ||
// // //   item.description?.toLowerCase().includes(searchQuery)
// // // )

// // const filteredTweets = tweets
// // // Optionally, filter tweets if searchQuery is not empty
// // // .filter((tweet) =>
// // //   tweet.text?.toLowerCase().includes(searchQuery)
// // // )

// //   return (
// //     <div className="mt-10 px-4">
// //       {/* 🔥 Trending News */}
// //       <h2 className="text-2xl font-bold mb-4">📰 Trending News</h2>
// //       {!news.length ? (
// //         <div className="text-gray-500 dark:text-gray-400">No news available.</div>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
// //          // {news.map((item: NewsItem, idx: number) => (
// //             <div
// //               key={item.url || idx}
// //               className="relative p-4 bg-gray-100 rounded dark:bg-gray-800 shadow hover:shadow-lg transition"
// //             >
// //               <Link href={item.url} target="_blank" rel="noopener noreferrer">
// //                 {item.urlToImage && (
// //                   <img
// //                     src={item.urlToImage}
// //                     alt={item.title}
// //                     className="w-full h-40 object-cover rounded mb-3"
// //                   />
// //                 )}
// //                 <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
// //                 <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
// //                   {item.description}
// //                 </p>
// //                 <p className="text-xs text-gray-500 dark:text-gray-400">
// //                   {item.source.name} • {new Date(item.publishedAt).toLocaleDateString()}
// //                 </p>
// //               </Link>
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //        {/* 🐦 Trending Tweets */}
// //       <h2 className="text-2xl font-bold mb-4">🐦 Trending Tweets</h2>
// //       {!tweets.length ? (
// //         <div className="text-gray-500 dark:text-gray-400">No tweets available.</div>
// //       ) : (
// //         <>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {tweets.slice(0, visibleTweets).map((tweet: TweetItem, idx) => (
// //               <ContentCard
// //                 key={`tweet-${tweet.id}-${idx}`}
// //                 title={tweet.text.slice(0, 80) + '...'}
// //                 description=""
// //                 imageUrl="/twitter.png"
// //                 url=""
// //                 type="tweet"
// //                 data={tweet}
// //               />
// //             ))}
// //           </div>
// //           {visibleTweets < tweets.length && (
// //             <div className="text-center mt-6">
// //               <button
// //                 onClick={() => setVisibleTweets((prev) => prev + 6)}
// //                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
// //               >
// //                 Load More Tweets
// //               </button>
// //             </div>
// //           )}
// //         </>
// //       )}
// //     </div>
// //   )
// // }

// // export default ContentFeed




















// 'use client'

// import { useSelector } from 'react-redux'
// import Link from 'next/link'
// import type { RootState } from '@/store'
// import type { NewsItem, TweetItem } from '@/slices/contentSlice'
// import ContentCard from './ContentCard'
// import { useState } from 'react'

// const ContentFeed = () => {
//   const news = useSelector((state: RootState) => state.content.news) || []
//   const tweets = useSelector((state: RootState) => state.content.tweets.items) || []
//   const searchQuery = useSelector((state: RootState) => state.search.query)?.toLowerCase() || ''
//   const [visibleTweets, setVisibleTweets] = useState(6)


//   // 🔍 Filter news
//   const filteredNews = news.filter(
//     (item) =>
//       item.title?.toLowerCase().includes(searchQuery) ||
//       item.description?.toLowerCase().includes(searchQuery)
//   )

//   // 🔍 Filter tweets
//   const filteredTweets = tweets.filter((tweet) =>
//     tweet.text?.toLowerCase().includes(searchQuery)
//   )

//   return (
//     <div className="mt-10 px-4">
//       {/* 🔥 Trending News */}
//       <h2 className="text-2xl font-bold mb-4">📰 Trending News</h2>
//       {!filteredNews.length ? (
//         <div className="text-gray-500 dark:text-gray-400">No news available.</div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//           {filteredNews.map((item: NewsItem, idx: number) => (
//             <div
//               key={item.url || idx}
//               className="relative p-4 bg-gray-100 rounded dark:bg-gray-800 shadow hover:shadow-lg transition"
//             >
//               <Link href={item.url} target="_blank" rel="noopener noreferrer">
//                 {item.urlToImage && (
//                   <img
//                     src={item.urlToImage}
//                     alt={item.title}
//                     className="w-full h-40 object-cover rounded mb-3"
//                   />
//                 )}
//                 <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
//                 <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
//                   {item.description}
//                 </p>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   {item.source.name} • {new Date(item.publishedAt).toLocaleDateString()}
//                 </p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* 🐦 Trending Tweets */}
//       <h2 className="text-2xl font-bold mb-4">🐦 Trending Tweets</h2>
//       {!filteredTweets.length ? (
//         <div className="text-gray-500 dark:text-gray-400">No tweets available.</div>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredTweets.slice(0, visibleTweets).map((tweet: TweetItem, idx) => (
//               <ContentCard
//                 key={`tweet-${tweet.id}-${idx}`}
//                 title={tweet.text.slice(0, 80) + '...'}
//                 description=""
//                 imageUrl="/twitter.png"
//                 url=""
//                 type="tweet"
//                 data={tweet}
//               />
//             ))}
//           </div>
//           {visibleTweets < filteredTweets.length && (
//             <div className="text-center mt-6">
//               <button
//                 onClick={() => setVisibleTweets((prev) => prev + 6)}
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//               >
//                 Load More Tweets
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   )
// }

// export default ContentFeed



'use client'

import { useSelector } from 'react-redux'
import type { RootState } from '@/store'
import Section from './Section'
import { useState, useEffect } from 'react'
import {
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

const ContentFeed = () => {
  const news = useSelector((state: RootState) => state.content?.news || [])
  const tweets = useSelector((state: RootState) => state.content?.tweets?.items || [])
  const movies = useSelector((state: RootState) => state.movies?.items || [])
  const music = useSelector((state: RootState) => state.spotify?.items || [])
  const searchQuery = useSelector((state: RootState) => state.search.query)?.toLowerCase() || ''

  const [visibleTweets, setVisibleTweets] = useState(6)
  const [visibleMovies, setVisibleMovies] = useState(6)
  const [visibleMusic, setVisibleMusic] = useState(6)

  const [newsOrder, setNewsOrder] = useState<string[]>([])
  const [tweetOrder, setTweetOrder] = useState<string[]>([])
  const [movieOrder, setMovieOrder] = useState<string[]>([])
  const [musicOrder, setMusicOrder] = useState<string[]>([])

  const sensors = useSensors(useSensor(PointerSensor))

  useEffect(() => {
    const newNewsOrder = news.map((n) => n.url)
    const newTweetOrder = tweets.map((t) => t.id)
    const newMovieOrder = movies.map((m) => m.id.toString())
    const newMusicOrder = music.map((m) => m.id)

    setNewsOrder((prev) => JSON.stringify(prev) !== JSON.stringify(newNewsOrder) ? newNewsOrder : prev)
    setTweetOrder((prev) => JSON.stringify(prev) !== JSON.stringify(newTweetOrder) ? newTweetOrder : prev)
    setMovieOrder((prev) => JSON.stringify(prev) !== JSON.stringify(newMovieOrder) ? newMovieOrder : prev)
    setMusicOrder((prev) => JSON.stringify(prev) !== JSON.stringify(newMusicOrder) ? newMusicOrder : prev)
  }, [news, tweets, movies, music])

  const reorder = (items: any[], order: string[], key = 'id') =>
    order.map((id) => items.find((item) => String(item[key] || item.url) === id)).filter(Boolean)

  const filteredNews = news.filter(
    (n) =>
      n.title?.toLowerCase().includes(searchQuery) ||
      n.description?.toLowerCase().includes(searchQuery)
  )

  const filteredTweets = tweets.filter((t) =>
    t.text?.toLowerCase().includes(searchQuery)
  )

  const filteredMovies = movies.filter((m) =>
    m.title?.toLowerCase().includes(searchQuery)
  )

  const filteredMusic = music.filter(
    (s) =>
      s.name?.toLowerCase().includes(searchQuery) ||
      s.artists?.some((a: { name: string }) => a.name?.toLowerCase().includes(searchQuery))
  )

  const handleDragEnd = (setOrder: Function) => (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return
    setOrder((prev: string[]) => {
      const oldIndex = prev.indexOf(active.id as string)
      const newIndex = prev.indexOf(over.id as string)
      return arrayMove(prev, oldIndex, newIndex)
    })
  }
  // 📰 News
useEffect(() => {
  if (news.length && newsOrder.length === 0) {
    setNewsOrder(news.map((n) => n.url))
  }
}, [news])

useEffect(() => {
  if (tweets.length && tweetOrder.length === 0) {
    setTweetOrder(tweets.map((t) => t.id))
  }
}, [tweets])

useEffect(() => {
  if (movies.length && movieOrder.length === 0) {
    setMovieOrder(movies.map((m) => m.id.toString()))
  }
}, [movies])

useEffect(() => {
  if (music.length && musicOrder.length === 0) {
    setMusicOrder(music.map((m) => m.id))
  }
}, [music])

  return (
    <div className="mt-10 px-4 space-y-10">
      {/* News */}
      <Section
        title="📰 Trending News"
        items={reorder(filteredNews, newsOrder, 'url')}
        type="news"
        onDragEnd={handleDragEnd(setNewsOrder)}
      />

      {/* Tweets */}
      <Section
        title="🐦 Trending Tweets"
        items={reorder(filteredTweets, tweetOrder)}
        type="tweet"
        onDragEnd={handleDragEnd(setTweetOrder)}
        visibleCount={visibleTweets}
        onLoadMore={() => setVisibleTweets((prev) => prev + 6)}
      />

      {/* Movies */}
      <Section
        title="🎬 Movie Recommendations"
        items={reorder(filteredMovies, movieOrder, 'id')}
        type="movie"
        onDragEnd={handleDragEnd(setMovieOrder)}
        visibleCount={visibleMovies}
        onLoadMore={() => setVisibleMovies((prev) => prev + 6)}
      />

      {/* Music */}
      <Section
        title="🎧 Spotify Tracks"
        items={reorder(filteredMusic, musicOrder)}
        type="spotify"
        onDragEnd={handleDragEnd(setMusicOrder)}
        visibleCount={visibleMusic}
        onLoadMore={() => setVisibleMusic((prev) => prev + 6)}
      />
    </div>
  )
}

export default ContentFeed
