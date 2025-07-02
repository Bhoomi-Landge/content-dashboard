'use client'

import Sidebar from './Sidebar'
import Header from './Header'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useEffect } from 'react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className="flex font-sans text-gray-800 dark:text-gray-200">
      <Sidebar />
      <main className="flex-1 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

        <Header />
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
