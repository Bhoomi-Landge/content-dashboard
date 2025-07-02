'use client'

import { FaHome, FaStar, FaFire, FaCog } from 'react-icons/fa'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Feed', icon: <FaHome />, href: '/' },
  { label: 'Trending', icon: <FaFire />, href: '/trending' },
  { label: 'Favorites', icon: <FaStar />, href: '/favorites' },
  { label: 'Settings', icon: <FaCog />, href: '/settings' },
]


export default function Sidebar() {
  const path = usePathname()

  return (
    <aside className="bg-gradient-to-b from-indigo-900/80 to-blue-900/80 backdrop-blur-lg text-white w-64 min-h-screen p-6 hidden md:block shadow-xl rounded-r-3xl">
      <h1 className="text-3xl font-bold mb-10">📊 Dashboard</h1>
      <nav className="space-y-5">
        {navItems.map((item) => {
          const active = path === item.href
          return (
            <Link key={item.href} href={item.href} className={`flex items-center space-x-3 p-2 rounded-xl transition-transform hover:scale-105 ${active ? 'bg-white/20' : ''}`}>
              <span className="text-xl">{item.icon}</span>
              <span className="text-base font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

// 'use client'

// import { useDispatch } from 'react-redux'
// import { setQuery } from '@/slices/searchSlice'
// import { debounce } from 'lodash'
// import { useCallback } from 'react'
// import { useRouter } from 'next/navigation'

// export default function SearchBar() {
//   const dispatch = useDispatch()
//   const router = useRouter()

//   const debouncedDispatch = useCallback(
//     debounce((value: string) => {
//       dispatch(setQuery(value))
//       router.push(`/search?q=${encodeURIComponent(value)}`)
//     }, 400),
//     [dispatch, router]
//   )

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value
//     debouncedDispatch(value)
//   }

//   return (
//     <div className="mb-6">
//       <input
//         type="text"
//         placeholder="🔍 Search news, movies, tweets, songs..."
//         onChange={handleChange}
//         className="w-full px-4 py-2 border rounded shadow"
//       />
//     </div>
//   )
// }
