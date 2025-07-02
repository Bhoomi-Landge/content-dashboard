'use client'

import { useDispatch } from 'react-redux'
import { setQuery } from '@/slices/searchSlice'
import { debounce } from 'lodash'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const dispatch = useDispatch()
  const router = useRouter()

  const debouncedDispatch = useCallback(
    debounce((value: string) => {
      dispatch(setQuery(value))
      router.push(`/search?q=${encodeURIComponent(value)}`)
    }, 400),
    [dispatch, router]
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    debouncedDispatch(value)
  }

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="🔍 Search news, movies, tweets, songs..."
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded shadow"
      />
    </div>
  )
}
