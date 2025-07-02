
// 'use client'

// import { useSelector } from 'react-redux'
// import { RootState } from '@/store'
// import ContentCard from '@/components/ContentCard'

// export default function FavoritesPage() {
//   const favorites = useSelector((state: RootState) => state.favorites.items)

//   const categorized = {
//     news: favorites.filter((item) => item.type === 'news'),
//     tweet: favorites.filter((item) => item.type === 'tweet'),
//     movie: favorites.filter((item) => item.type === 'movie'),
//     spotify: favorites.filter((item) => item.type === 'spotify'),
//   }

//   return (
//     <div className="p-6 space-y-12">
//       <h1 className="text-3xl font-bold mb-6">⭐ Your Favorites</h1>

//       {favorites.length === 0 ? (
//         <p className="text-gray-400 text-lg">You haven’t added anything to favorites yet.</p>
//       ) : (
//         <>
//           <Section title="📰 News" items={categorized.news} />
//           <Section title="🐦 Tweets" items={categorized.tweet} />
//           <Section title="🎬 Movies" items={categorized.movie} />
//           <Section title="🎧 Songs" items={categorized.spotify} />
//         </>
//       )}
//     </div>
//   )
// }

// function Section({
//   title,
//   items,
// }: {
//   title: string
//   items: any[]
// }) {
//   if (!items.length) return null

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">{title}</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {items.map((item, index) => {
//           let title = ''
//           let description = ''
//           let imageUrl = ''
//           let url = ''

//           switch (item.type) {
//             case 'news':
//               title = item.data?.title || ''
//               description = item.data?.description || ''
//               imageUrl = item.data?.urlToImage || '/news.png'
//               url = item.data?.url || ''
//               break
//             case 'tweet':
//               title = item.data?.text?.slice(0, 80) + '...' || '[No Text]'
//               description = ''
//               imageUrl = '/twitter.png'
//               url = ''
//               break
//             case 'movie':
//               title = item.data?.title || ''
//               description = item.data?.overview || ''
//               imageUrl = item.data?.poster_path
//                 ? `https://image.tmdb.org/t/p/w500${item.data.poster_path}`
//                 : '/placeholder.jpg'
//               url = ''
//               break
//             case 'spotify':
//               title = item.data?.name || ''
//               description = Array.isArray(item.data?.artists)
//                 ? item.data.artists.map((a: any) => a.name).join(', ')
//                 : ''
//               imageUrl = item.data?.album?.images?.[0]?.url || '/spotify.png'
//               url = item.data?.external_urls?.spotify || ''
//               break
//             default:
//               return null
//           }

//           return (
//             <ContentCard
//               key={`${item.type}-${item.id}-${item.data?.publishedAt || item.data?.release_date || index}`}
//               title={title}
//               description={description}
//               imageUrl={imageUrl}
//               url={url}
//               type={item.type}
//               data={item.data}
//             />
//           )
//         })}
//       </div>
//     </div>
//   )
// }
'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import ContentCard from '@/components/ContentCard'

const CATEGORIES = ['all', 'news', 'tweet', 'movie', 'spotify']

export default function FavoritesPage() {
  const favorites = useSelector((state: RootState) => state.favorites.items)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const [visibleCount, setVisibleCount] = useState({
    news: 6,
    tweet: 6,
    movie: 6,
    spotify: 6,
  })

  const categorized = {
    news: favorites.filter((item) => item.type === 'news'),
    tweet: favorites.filter((item) => item.type === 'tweet'),
    movie: favorites.filter((item) => item.type === 'movie'),
    spotify: favorites.filter((item) => item.type === 'spotify'),
  }

  const handleLoadMore = (type: keyof typeof visibleCount) => {
    setVisibleCount((prev) => ({ ...prev, [type]: prev[type] + 6 }))
  }

  const renderSection = (type: keyof typeof categorized, title: string) => {
    const items = categorized[type].slice(0, visibleCount[type])
    if (!items.length) return null

    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            let title = ''
            let description = ''
            let imageUrl = ''
            let url = ''

            switch (item.type) {
              case 'news':
                title = item.data?.title || ''
                description = item.data?.description || ''
                imageUrl = item.data?.urlToImage || '/news.png'
                url = item.data?.url || ''
                break
              case 'tweet':
                title = item.data?.text?.slice(0, 80) + '...' || '[No Text]'
                description = ''
                imageUrl = '/twitter.png'
                url = ''
                break
              case 'movie':
                title = item.data?.title || ''
                description = item.data?.overview || ''
                imageUrl = item.data?.poster_path
                  ? `https://image.tmdb.org/t/p/w500${item.data.poster_path}`
                  : '/placeholder.jpg'
                url = ''
                break
              case 'spotify':
                title = item.data?.name || ''
                description = Array.isArray(item.data?.artists)
                  ? item.data.artists.map((a: any) => a.name).join(', ')
                  : ''
                imageUrl = item.data?.album?.images?.[0]?.url || '/spotify.png'
                url = item.data?.external_urls?.spotify || ''
                break
              default:
                return null
            }

            return (
              <ContentCard
                key={`${item.type}-${item.id}-${item.data?.publishedAt || item.data?.release_date || index}`}
                title={title}
                description={description}
                imageUrl={imageUrl}
                url={url}
                type={item.type}
                data={item.data}
              />
            )
          })}
        </div>
        {categorized[type].length > visibleCount[type] && (
          <div className="text-center mt-4">
            <button
              onClick={() => handleLoadMore(type)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    )
  }

  const isEmpty =
    selectedCategory === 'all'
      ? favorites.length === 0
      : categorized[selectedCategory as keyof typeof categorized].length === 0

  return (
    <div className="p-6 space-y-12">
      <h1 className="text-3xl font-bold mb-6">⭐ Your Favorites</h1>

      {/* Dropdown filter */}
      <div className="mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border rounded"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat === 'all'
                ? 'All'
                : cat[0].toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {isEmpty ? (
        <p className="text-gray-400 text-lg">No favorites found in this category.</p>
      ) : selectedCategory === 'all' ? (
        <>
          {renderSection('news', '📰 News')}
          {renderSection('tweet', '🐦 Tweets')}
          {renderSection('movie', '🎬 Movies')}
          {renderSection('spotify', '🎧 Songs')}
        </>
      ) : (
        renderSection(
          selectedCategory as keyof typeof categorized,
          {
            news: '📰 News',
            tweet: '🐦 Tweets',
            movie: '🎬 Movies',
            spotify: '🎧 Songs',
          }[selectedCategory as keyof typeof categorized]
        )
      )}
    </div>
  )
}
