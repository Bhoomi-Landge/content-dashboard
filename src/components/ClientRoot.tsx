'use client'

import { useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '@/slices/contentSlice'
import { toggleFavorite } from '@/store/favoritesSlice'
import { RootState, AppDispatch } from '@/store'
// ...


export default function ClientRoot({ children }: { children: React.ReactNode }) {
   return <div className="min-h-screen">{children}</div>
  // Update the selector to match your actual state shape, e.g. state.favorites.isDarkMode
  const darkMode = useSelector((state: RootState) => state.favorites.isDarkMode)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return 
  <>
  {children}</>
}
