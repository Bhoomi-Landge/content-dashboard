// // ✅ File: app/api/mock-twitter/route.ts
// import { NextResponse } from 'next/server'

// export async function GET() {
//   const mockTweets = [
//     {
//       id: 'tweet-1',
//       text: 'AI is transforming the world in 2025 🚀',
//       author_id: 'elon_musk',
//       created_at: new Date().toISOString(),
//     },
//     {
//       id: 'tweet-2',
//       text: 'Next.js 15 is blazing fast with Turbopack ⚡',
//       author_id: 'vercel',
//       created_at: new Date(Date.now() - 86400000).toISOString(),
//     },
//     {
//       id: 'tweet-3',
//       text: 'Just deployed my project with Vercel + MongoDB + ChatGPT 💡',
//       author_id: 'bhoomi_dev',
//       created_at: new Date(Date.now() - 2 * 86400000).toISOString(),
//     },
//     {
//       id: 'tweet-4',
//       text: 'TypeScript is love 💙. Use it, trust me.',
//       author_id: 'typescript_bot',
//       created_at: new Date(Date.now() - 3 * 86400000).toISOString(),
//     },
//     {
//       id: 'tweet-5',
//       text: 'The best developers write the cleanest code ✨',
//       author_id: 'clean_code_guy',
//       created_at: new Date(Date.now() - 4 * 86400000).toISOString(),
//     },
//     {
//       id: 'tweet-6',
//       text: 'OpenAI launches GPT-5 — it’s wild! 🧠',
//       author_id: 'techcrunch',
//       created_at: new Date(Date.now() - 5 * 86400000).toISOString(),
//     },
//     {
//       id: 'tweet-7',
//       text: 'How to scale a startup from 0 to 1M users 📈',
//       author_id: 'startup_guru',
//       created_at: new Date(Date.now() - 6 * 86400000).toISOString(),
//     },
//     {
//       id: 'tweet-8',
//       text: 'CSS Grid > Flexbox? Let the war begin 🔥',
//       author_id: 'frontend_daily',
//       created_at: new Date(Date.now() - 7 * 86400000).toISOString(),
//     },
//     {
//       id: 'tweet-9',
//       text: 'Docker + Node + PostgreSQL = Production Ready 🐳',
//       author_id: 'devops_diary',
//       created_at: new Date(Date.now() - 8 * 86400000).toISOString(),
//     },
//     {
//       id: 'tweet-10',
//       text: 'React Server Components changed the game. Period.',
//       author_id: 'react_core',
//       created_at: new Date(Date.now() - 9 * 86400000).toISOString(),
//     },
//     {
//       id: 'tweet-11',
//       text: 'You don’t need a fancy setup to build great things. Just start! 💻',
//       author_id: 'bhoomi_dev',
//       created_at: new Date(Date.now() - 10 * 86400000).toISOString(),
//     },
//     {
//       id: 'tweet-12',
//       text: 'GitHub Copilot helps, but you’re the captain 👩‍✈️',
//       author_id: 'ai_coding_assist',
//       created_at: new Date(Date.now() - 11 * 86400000).toISOString(),
//     },
//   ]

//   return NextResponse.json({ tweets: mockTweets })
// }
// ✅ File: app/api/mock-twitter/route.ts
import { NextResponse } from 'next/server'
import { faker } from '@faker-js/faker'

export async function GET() {
  const mockTweets = Array.from({ length: 15 }).map((_, i) => ({
    id: `tweet-${i + 1}`,
    text: faker.hacker.phrase() + ' ' + faker.internet.emoji(),
    author_id: faker.internet.userName(),
    created_at: faker.date.recent({ days: 10 }).toISOString(),
    imageUrl: `https://source.unsplash.com/64x64/?avatar&sig=${i}` // random image
  }))

  return NextResponse.json({ tweets: mockTweets })
}
