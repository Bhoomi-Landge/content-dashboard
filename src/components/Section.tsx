import { DndContext } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import SortableCard from './SortableCard'

export default function Section({
  title,
  items,
  type,
  onDragEnd,
  visibleCount,
  onLoadMore,
}: {
  title: string
  items: any[]
  type: 'news' | 'tweet' | 'movie' | 'spotify'
  onDragEnd: any
  visibleCount?: number
  onLoadMore?: () => void
}) {
  const showItems = visibleCount ? items.slice(0, visibleCount) : items

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {!showItems.length ? (
        <div className="text-gray-500 dark:text-gray-400">No {type} available.</div>
      ) : (
        <DndContext onDragEnd={onDragEnd}>
          <SortableContext items={showItems.map((i) => i.id || i.url)} strategy={verticalListSortingStrategy}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {showItems.map((item) => (
                <SortableCard key={item.id || item.url} item={item} type={type} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}

      {onLoadMore && visibleCount && items.length > visibleCount && (
        <div className="text-center mt-6">
          <button
            onClick={onLoadMore}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  )
}
