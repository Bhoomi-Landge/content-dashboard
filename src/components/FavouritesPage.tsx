// 'use client'

// import { useSelector } from 'react-redux'
// import { RootState } from '@/store'
// import ContentCard from '@/components/ContentCard'

// export default function FavouritesPage() {
//   const favorites = useSelector((state: RootState) => state.favorites.items)

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">⭐ Your Favorites</h1>

//       {favorites.length === 0 ? (
//         <p className="text-gray-400 text-lg">You haven’t added anything to favorites yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {favorites.map((item) => {
//             let title = ''
//             let description = ''
//             let imageUrl = ''
//             let url = ''

//             switch (item.type) {
//               case 'news':
//                 title = item.data.title
//                 description = item.data.description
//                 imageUrl = item.data.urlToImage
//                 url = item.data.url
//                 break
//               case 'tweet':
//                 title = item.data.text.slice(0, 80) + '...'
//                 description = ''
//                 imageUrl = '/twitter.png'
//                 url = ''
//                 break
//               case 'movie':
//                 title = item.data.title
//                 description = item.data.overview
//                 imageUrl = `https://image.tmdb.org/t/p/w500${item.data.poster_path}`
//                 url = ''
//                 break
//               case 'spotify':
//                 title = item.data.name
//                 description = item.data.artists.map((a: any) => a.name).join(', ')
//                 imageUrl = item.data.album.images?.[0]?.url
//                 url = item.data.external_urls?.spotify || ''
//                 break
//               default:
//                 break
//             }

//             return (
//               <ContentCard
//                 key={`${item.type}-${item.id}`}
//                 title={title}
//                 description={description}
//                 imageUrl={imageUrl}
//                 url={url}
//                 type={item.type}
//                 data={item.data}
//               />
//             )
//           })}
//         </div>
//       )}
//     </div>
//   )
// }
