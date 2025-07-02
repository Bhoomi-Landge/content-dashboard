'use client'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { toggleDarkMode } from '@/slices/preferencesSlice'

export default function ThemeToggle() {
  const dispatch = useDispatch()

  // ✅ Correct slice: preferences
  const darkMode = useSelector((state: RootState) => state.preferences.darkMode)

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="ml-4 px-3 py-2 rounded-full bg-yellow-200 dark:bg-indigo-700 text-xl transition-all duration-300 ease-in-out"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  )
}
