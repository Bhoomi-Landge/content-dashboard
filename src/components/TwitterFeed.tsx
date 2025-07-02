'use client'

import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '@/store/favoritesSlice'
import { RootState } from '@/store'

type Tweet = {
  id: string
  text: string
  author_id: string
  created_at: string
}


export default function TwitterFeed() {
  const [hashtag, setHashtag] = useState('technology')
  const [tweets, setTweets] = useState<Tweet[]>([])
  const [nextToken, setNextToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorites.items)

  const isFavorited = (id: string) =>
    favorites.some((f) => f.id === id && f.type === 'tweet')

  const handleFavorite = (tweet: Tweet) => {
    dispatch(toggleFavorite({ id: tweet.id, type: 'tweet', data: tweet }))
  }

//   const fetchTweets = async (isLoadMore = false) => {
//     if (!hashtag.trim()) return

//     try {
//       setLoading(true)
//       const res = await fetch(
//         `/api/twitter?hashtag=${encodeURIComponent(hashtag)}${
//           nextToken ? `&nextToken=${nextToken}` : ''
//         }`
//       )
//       const data = await res.json()

//       if (!Array.isArray(data.tweets)) {
//         console.error('Invalid tweets response:', data)
//         return
//       }

//       setTweets((prev) => (isLoadMore ? [...prev, ...data.tweets] : data.tweets))
//       setNextToken(data.nextToken || null)
//     } catch (error) {
//       console.error('Error fetching tweets:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     const delayDebounce = setTimeout(() => {
//       setTweets([])
//       setNextToken(null)
//       fetchTweets()
//     }, 800)

//     return () => clearTimeout(delayDebounce)
//   }, [hashtag])

//   return (
//     <div className="mt-10">
//       <h2 className="text-2xl font-bold mb-4">🐦 Trending Tweets</h2>

//       <input
//         type="text"
//         value={hashtag}
//         onChange={(e) => setHashtag(e.target.value)}
//         className="p-2 border rounded mb-4 w-full"
//         placeholder="Enter hashtag (without #)"
//       />

//       <div className="space-y-4">
//         {tweets.length > 0 ? (
//           tweets.map((tweet) => (
//             <div
//               key={tweet.id}
//               className="relative p-4 bg-gray-100 rounded dark:bg-gray-800"
//             >
//               <div className="absolute top-2 right-2 bg-black/50 p-1 rounded-full">
//   <FaStar
//     onClick={() => handleFavorite(tweet)}
//     className={`text-xl cursor-pointer transition-transform ${
//       isFavorited(tweet.id)
//         ? 'text-yellow-400'
//         : 'text-white/80 hover:text-yellow-300'
//     } hover:scale-110 hover:drop-shadow-[0_0_6px_gold]`}
//   />
// </div>


//               <p className="text-sm text-gray-600">
//                 {new Date(tweet.created_at).toLocaleString()}
//               </p>
//               <p className="text-lg">{tweet.text}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No tweets found for #{hashtag}</p>
//         )}
//       </div>

//       {nextToken && (
//         <div className="text-center mt-4">
//           <button
//             onClick={() => fetchTweets(true)}
//             disabled={loading}
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//           >
//             {loading ? 'Loading...' : 'Load More Tweets'}
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }
// function dispatch(arg0: { payload: { id: number | string; type: "movie" | "news" | "tweet" | "spotify"; data: any }; type: "favorites/toggleFavorite" }) {
//   throw new Error('Function not implemented.')
// }

const fetchTweets = async (isLoadMore = false) => {
  if (!hashtag.trim()) return

  try {
    setLoading(true)
    const res = await fetch(
      `/api/twitter?hashtag=${encodeURIComponent(hashtag)}${
        nextToken ? `&nextToken=${nextToken}` : ''
      }`
    )
    const data = await res.json()

    if (!Array.isArray(data.tweets)) {
      console.error('Invalid tweets response:', data)
      return
    }

    const updatedTweets = isLoadMore ? [...tweets, ...data.tweets] : data.tweets
    setTweets(updatedTweets)
    setNextToken(data.nextToken || null)
  } catch (error) {
    console.error('Error fetching tweets:', error)
  } finally {
    setLoading(false)
  }
}}
