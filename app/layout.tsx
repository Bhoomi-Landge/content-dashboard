// import './globals.css'
// import ClientRoot from '@/components/ClientRoot' // ✅ Use external component
// import Providers from '@/components/Providers'
// import Sidebar from '@/components/Sidebar'
// import PageInitLoader from '@/components/PageInitLoader'
// import SearchBar from '@/components/SearchBar'

// export const metadata = {
//   title: 'Dashboard',
//   description: 'Your personalized content dashboard',
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//    <html lang="en">
//   <body className="...">
//     <Providers>
//       <ClientRoot>
//         <PageInitLoader />
//         <div className="flex min-h-screen">
//   <Sidebar />
//   <main className="flex-1">
//     <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700 bg-white dark:bg-gray-900">
//       <SearchBar />
//     </div>
//     <div className="p-6">{children}</div>
//   </main>
// </div>

          
//       </ClientRoot>
//     </Providers>
//   </body>
// </html>
//   )
// }






// app/layout.tsx
import './globals.css'
import Providers from '@/components/Providers'
import ClientRoot from '@/components/ClientRoot'
import PageInitLoader from '@/components/PageInitLoader'
import Sidebar from '@/components/Sidebar'
import SearchBar from '@/components/SearchBar'

export const metadata = {
  title: 'Dashboard',
  description: 'Your personalized content dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <Providers>
  <ClientRoot>
    <PageInitLoader />  {/* ✅ Mount only here */}
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <div className="p-4 border-b bg-white dark:bg-gray-900">
          <SearchBar />
        </div>
        <div className="p-6">{children}</div>
      </main>
    </div>
  </ClientRoot>
</Providers>

      </body>
    </html>
  )
}
