
// import CategorySelector from '@/components/CategorySelector'
// import ContentFeed from '@/components/ContentFeed'
// import TrendingMovies from '@/components/TrendingMovies'
// import TrendingTweets from '@/components/TwitterFeed'
// import SpotifyFeed from '@/components/SpotifyFeed'
// import TwitterFeed from '@/components/TwitterFeed'


// export default function DashboardPage() {
//   return (
//     <div className="space-y-6">
//       <h1 className="text-2xl font-bold">📰 Top Headlines</h1>
//       <CategorySelector />
//       <ContentFeed />
//        <TrendingMovies />
//          <TwitterFeed />
//        <SpotifyFeed />
//     </div>
//   )
// }
import CategorySelector from '@/components/CategorySelector'
import ContentFeed from '@/components/ContentFeed'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">📰 Top Headlines</h1>
      <CategorySelector />
      <ContentFeed />
    </div>
  )
}
