// src/components/UserPreferences.tsx
'use client'

import { CATEGORY_OPTIONS } from '@/constants/categories'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store'
import { setCategories } from '@/slices/preferencesSlice'

export default function UserPreferences() {
  const dispatch = useDispatch()
  const selected = useSelector((state: RootState) => state.preferences.categories)

  const toggleCategory = (category: string) => {
    const updated = selected.includes(category)
      ? selected.filter((c) => c !== category)
      : [...selected, category]

    dispatch(setCategories(updated))
    localStorage.setItem('preferredCategories', JSON.stringify(updated))
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-bold mb-4">🛠️ Select Your Preferred Categories</h2>
      <div className="flex flex-wrap gap-3">
        {CATEGORY_OPTIONS.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            className={`px-4 py-2 rounded ${
              selected.includes(cat)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
            }`}
          >
            {cat[0].toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}
