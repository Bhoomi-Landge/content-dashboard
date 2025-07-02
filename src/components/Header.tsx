'use client'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-50">
      <input
        type="text"
        placeholder="Search your feed..."
        className="px-4 py-2 w-full max-w-md rounded-md border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-slate-800 placeholder:text-gray-500 dark:placeholder:text-gray-400 text-sm focus:outline-none"
      />
      <ThemeToggle />
    </header>
  )
}
