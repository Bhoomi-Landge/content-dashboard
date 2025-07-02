// // import React from 'react'

// // type Props = {
// //   title: string
// //   description: string
// //   imageUrl?: string
// //   url: string
// // }

// // export default function ContentCard({ title, description, imageUrl, url }: Props) {
// //   return (
// //     <div className="bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md p-4 transition-all duration-300">
// //       {imageUrl && <img src={imageUrl} alt={title} className="rounded mb-3 w-full h-40 object-cover" />}
// //       <h3 className="text-lg font-bold mb-1">{title}</h3>
// //       <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{description}</p>
// //       <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 inline-block">
// //         Read More →
// //       </a>
// //     </div>
// //   )
// // }
// import { FaStar } from 'react-icons/fa'
// import { useDispatch, useSelector } from 'react-redux'
// import { toggleFavorite } from '@/store/favoritesSlice'
// import { RootState } from '@/store'

// type ContentCardProps = {
//   title: string
//   description: string
//   imageUrl?: string
//   url: string
//   data: any
//   type: 'movie' | 'news' | 'tweet' | 'spotify'
// }

// export default function ContentCard({ title, description, imageUrl, url, data, type }: ContentCardProps) {
//   const dispatch = useDispatch()
//   const favorites = useSelector((state: RootState) => state.favorites.items)

//   const isFavorited = favorites.some((f) => f.id === (data.id || data.url) && f.type === type)

//   const handleFavorite = () => {
//     dispatch(toggleFavorite({ id: data.id || data.url, type, data }))
//   }

//   return (
//     <div className="relative p-4 bg-gray-100 rounded dark:bg-gray-800 shadow hover:shadow-lg transition">
//       <div className="absolute top-2 right-2 bg-black/60 p-1 rounded-full">
//         <FaStar
//           onClick={handleFavorite}
//           className={`text-xl cursor-pointer transition-transform ${
//             isFavorited ? 'text-yellow-400' : 'text-white/70 hover:text-yellow-300'
//           } hover:scale-110 hover:drop-shadow-[0_0_6px_gold]`}
//         />
//       </div>

//       {imageUrl && (
//         <img src={imageUrl} alt={title} className="rounded mb-3 w-full h-40 object-cover" />
//       )}
//       <h3 className="text-lg font-bold">{title}</h3>
//       <p className="text-sm text-gray-600 mt-1">{description}</p>
//     </div>
//   )
// }








// 'use client'

// import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '@/store'
// import { toggleFavorite } from '@/store/favoritesSlice'
// import { FaStar } from 'react-icons/fa'

// type ContentCardProps = {
//   title: string
//   description: string
//   imageUrl?: string
//   url: string
//   data: any
//   type: 'movie' | 'news' | 'tweet' | 'spotify'
// }

// export default function ContentCard({ title, description, imageUrl, url, data, type }: ContentCardProps) {
//   const dispatch = useDispatch()
//   const favorites = useSelector((state: RootState) => state.favorites.items)

//   const isFavorited = favorites.some((f) => f.id === (data.id || data.url) && f.type === type)

//   const handleFavorite = () => {
//     dispatch(toggleFavorite({ id: data.id || data.url, type, data }))
//   }

//   return (
//     <div className="relative p-4 bg-gray-100 rounded dark:bg-gray-800 shadow hover:shadow-lg transition">
//       <div className="absolute top-2 right-2 bg-black/60 p-1 rounded-full">
//         <FaStar
//           onClick={handleFavorite}
//           className={`text-xl cursor-pointer transition-transform ${
//             isFavorited ? 'text-yellow-400' : 'text-white/70 hover:text-yellow-300'
//           } hover:scale-110 hover:drop-shadow-[0_0_6px_gold]`}
//         />
//       </div>

// {imageUrl && (
//   <img
//   src={
//     imageUrl?.trim()
//       ? imageUrl
//       : type === 'tweet'
//       ? 'https://abs.twimg.com/icons/apple-touch-icon-192x192.png'
//       : '/placeholder.jpg'
//   }
//   alt={title}
//   className="rounded mb-3 w-full h-40 object-cover"
// />

// )}
//       <h3 className="text-lg font-bold">{title}</h3>
//       <p className="text-sm text-gray-600 mt-1">{description}</p>
//       {url && (
//         <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 block mt-2">
//           Read More →
//         </a>
//       )}
//     </div>
//   )
// }










// src/components/ContentCard.tsx
'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { toggleFavorite } from '@/slices/favoritesSlice'
import { FaStar } from 'react-icons/fa'

type ContentCardProps = {
  title: string
  description: string
  imageUrl?: string
  url: string
  data: any
  type: 'movie' | 'news' | 'tweet' | 'spotify'
}

export default function ContentCard({ title, description, imageUrl, url, data, type }: ContentCardProps) {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorites.items)

  const isFavorited = favorites.some(
  (f) => String(f.id) === String(data.id || data.url) && f.type === type
)
const handleFavorite = (e: React.MouseEvent) => {
  e.stopPropagation();
  e.preventDefault(); // Avoid navigation
 console.log('⭐ Favorite clicked:', data); // ✅ not inside a string
  dispatch(toggleFavorite({
    id: String(data.id || data.url),
    type,
    data,
  }));
};


  return (
    <div className="relative p-4 bg-gray-100 rounded dark:bg-gray-800 shadow hover:shadow-lg transition">
      <div className="absolute top-2 right-2 bg-black/60 p-1 rounded-full z-10">
     <FaStar
  data-testid="favorite-icon" // ✅ this line is critical for Cypress
  onClick={handleFavorite}
  className={`text-xl cursor-pointer transition-transform ${
    isFavorited ? 'text-yellow-400' : 'text-white/70 hover:text-yellow-300'
  } hover:scale-110 hover:drop-shadow-[0_0_6px_gold]`}
/>


      </div>

      {imageUrl && (
        <img
          src={
            imageUrl?.trim()
              ? imageUrl
              : type === 'tweet'
              ? 'https://abs.twimg.com/icons/apple-touch-icon-192x192.png'
              : '/placeholder.jpg'
          }
          alt={title}
          className="rounded mb-3 w-full h-40 object-cover"
        />
      )}

      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      {url && (
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 block mt-2">
          Read More →
        </a>
      )}
    </div>
  )
}
