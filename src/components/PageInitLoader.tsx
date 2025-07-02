
// 'use client'

// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import type { AppDispatch } from '@/store'
// import { setNews, setTweets } from '@/slices/contentSlice'
// import { setMovies } from '@/slices/moviesSlice'
// import { setSpotifyTracks } from '@/slices/spotifySlice'

// export default function PageInitLoader() {
//   const dispatch = useDispatch<AppDispatch>()

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const trendingRes = await fetch('/api/trending')
//         const trendingData = await trendingRes.json()

//         dispatch(setNews(trendingData.news))
//         dispatch(setMovies(trendingData.movies))
//         dispatch(setSpotifyTracks(trendingData.spotifyTracks))
       


//         // 🔥 NEW: fetch tweets
//         // const tweetRes = await fetch('/api/twitter?hashtag=technology')
//         // const tweetData = await tweetRes.json()
//         // dispatch(setTweets(tweetData.data)) // assumes it's in .data
//         // const res = await fetch('/api/twitter?hashtag=technology')
//         const tweetApi = process.env.NEXT_PUBLIC_USE_MOCK_TWEETS === 'true'
//   ? '/api/mock-twitter'
//   : '/api/twitter?hashtag=technology'



//         const res = await fetch('/api/mock-twitter')
//         const data = await res.json()
//         dispatch(setTweets(data.tweets))

//       } catch (error) {
//         console.error('🔥 Error in PageInitLoader:', error)
//       }
//     }

//     fetchData()
//   }, [dispatch])

//   return null
// }



'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/store'
import { setNews, setTweets } from '@/slices/contentSlice'
import { setMovies } from '@/slices/moviesSlice'
import { setSpotifyTracks } from '@/slices/spotifySlice'
import uniqBy from 'lodash/uniqBy'

export default function PageInitLoader() {
  const dispatch = useDispatch<AppDispatch>()

useEffect(() => {
  async function fetchData() {
    console.log('📦 Fetching data from PageInitLoader...')

    const trendingRes = await fetch('/api/trending')
    const trendingData = await trendingRes.json()

    console.log('🎬 movies', trendingData.movies)
    console.log('🎧 music', trendingData.spotifyTracks)

    dispatch(setNews(trendingData.news))
    dispatch(setMovies(trendingData.movies))
    dispatch(setSpotifyTracks(trendingData.spotifyTracks))

    const res = await fetch('/api/mock-twitter')
    const data = await res.json()
    dispatch(setTweets(data.tweets))
  }

  fetchData()
}, [dispatch])


  return null
}
