'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { setCategory } from '@/slices/contentSlice'

const categories = [
  'general',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology',
]

export default function CategorySelector() {
  const dispatch = useDispatch()
  const selectedCategory = useSelector((state: RootState) => state.content.selectedCategory)

  return (
    <div className="mb-4">
      <select
        className="border px-3 py-2 rounded"
        value={selectedCategory}
        onChange={(e) => dispatch(setCategory(e.target.value))}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat[0].toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}
