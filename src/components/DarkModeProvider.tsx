'use client'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export default function DarkModeProvider({ children }: { children: React.ReactNode }) {
  // Update the selector to match your actual Redux state structure
  // Example: if darkMode is under 'favorites'
  const darkMode = useSelector((state: RootState) => state.favorites.darkMode)

  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [darkMode])

  return <>{children}</>
}
