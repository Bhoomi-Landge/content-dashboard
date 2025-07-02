// // /app/api/twitter/route.ts
// import { NextResponse } from 'next/server'
// import axios from 'axios'

// const BEARER_TOKEN = process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN

// export async function GET(req: Request) {
//   const url = new URL(req.url)
//   const hashtag = url.searchParams.get('hashtag') || 'technology'
//   const nextToken = url.searchParams.get('nextToken')

//   if (!BEARER_TOKEN) {
//     return NextResponse.json({ error: 'Missing Twitter Bearer Token' }, { status: 500 })
//   }

//   try {
//     const response = await axios.get('https://api.twitter.com/2/tweets/search/recent', {
//       headers: {
//         Authorization: `Bearer ${BEARER_TOKEN}`,
//       },
//       params: {
//         query: `#${hashtag}`,
//         'tweet.fields': 'author_id,created_at',
//         max_results: 10,
//         ...(nextToken && { next_token: nextToken }),
//       },
//     })

//     const tweets = response.data?.data || []
//     const newNextToken = response.data.meta?.next_token || null

//     return NextResponse.json({ tweets, nextToken: newNextToken })
//   } catch (err: any) {
//     console.error('💥 Twitter API Error:', err?.response?.data || err.message)
//     return NextResponse.json({ error: 'Twitter fetch failed' }, { status: 500 })
//   }
// }
// ✅ File: app/api/twitter/route.ts
// src/app/api/twitter/route.ts
// import { NextRequest, NextResponse } from 'next/server'

// const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY

// export async function GET(req: NextRequest) {
//   const hashtag = req.nextUrl.searchParams.get('hashtag') || 'technology'

//   if (!RAPIDAPI_KEY) {
//     return NextResponse.json({ error: 'Missing RapidAPI Key' }, { status: 500 })
//   }

//   try {
//     const res = await fetch(
//       `https://twitter154.p.rapidapi.com/search/tweets?query=%23${hashtag}&limit=10`,
//       {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': RAPIDAPI_KEY,
//           'X-RapidAPI-Host': 'twitter154.p.rapidapi.com',
//         },
//       }
//     )

//     if (!res.ok) {
//       const errText = await res.text()
//       console.error('❌ RapidAPI Response Error:', res.status, errText)
//       return NextResponse.json({ tweets: [], error: 'RapidAPI fetch failed' }, { status: 500 })
//     }

//     const json = await res.json()

//     const tweets = (json.results || []).map((tweet: any) => ({
//       id: tweet.id,
//       text: tweet.text,
//       author_id: tweet.user_id,
//       created_at: tweet.date,
//     }))

//     return NextResponse.json({ tweets })
//   } catch (error) {
//     console.error('🔥 Twitter RapidAPI error:', error)
//     return NextResponse.json({ tweets: [], error: 'Failed to fetch tweets' }, { status: 500 })
//   }
// }
// ✅ MOCK Twitter API — app/api/twitter/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const hashtag = req.nextUrl.searchParams.get('hashtag') || 'technology'

  // 🔁 Mock Data
  const tweets = Array.from({ length: 6 }).map((_, i) => ({
    id: `${hashtag}-${i}`,
    text: `🔥 ${hashtag.toUpperCase()} tweet #${i + 1} — Stay tuned for more!`,
    author_id: `user_${i + 1}`,
    created_at: new Date(Date.now() - i * 60000).toISOString(), // 1 minute apart
  }))

  return NextResponse.json({ tweets })
}
