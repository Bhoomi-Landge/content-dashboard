// 'use client'

// import { useSortable } from '@dnd-kit/sortable'
// import { CSS } from '@dnd-kit/utilities'
// import ContentCard from './ContentCard'

// export default function SortableCard({
//   item,
//   type,
// }: {
//   item: any
//   type: 'news' | 'tweet' | 'movie' | 'spotify'
// }) {
//   const id = item.id || item.url
//   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
//   const style = { transform: CSS.Transform.toString(transform), transition }

//   let imageUrl = item.urlToImage || item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : ''
//   if (type === 'tweet') imageUrl = '/twitter.png'
//   if (type === 'spotify') imageUrl = item.album?.images?.[0]?.url

//   return (
//     <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//       <ContentCard
//         title={item.title || item.name || item.text?.slice(0, 80) + '...'}
//         description={
//           item.description ||
//           item.overview ||
//           item.artists?.map((a: any) => a.name).join(', ') ||
//           ''
//         }
//         imageUrl={imageUrl}
//         url={item.url || item.external_urls?.spotify || ''}
//         type={type}
//         data={item}
//       />
//     </div>
//   )
// }
// src/components/SortableCard.tsx
'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import ContentCard from './ContentCard'

export default function SortableCard({
  item,
  type,
}: {
  item: any
  type: 'news' | 'tweet' | 'movie' | 'spotify'
}) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id || item.url,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const imageUrl =
    type === 'movie'
      ? item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
        : '/placeholder.jpg'
      : type === 'spotify'
      ? item.album?.images?.[0]?.url || '/spotify.png'
      : type === 'tweet'
      ? '/twitter.png'
      : item.urlToImage || '/placeholder.jpg'

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ContentCard
        title={
          item.title ||
          item.name ||
          item.text?.slice(0, 80) + '...' ||
          '[No Title]'
        }
        description={
          item.description ||
          item.overview ||
          (Array.isArray(item.artists) ? item.artists.map((a: any) => a.name).join(', ') : '') ||
          ''
        }
        imageUrl={imageUrl}
        url={item.url || item.external_urls?.spotify || ''}
        type={type}
        data={item}
      />
    </div>
  )
}
