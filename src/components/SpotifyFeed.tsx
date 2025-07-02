'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
// Update the path below if your favoritesSlice is not in src/store
import { toggleFavorite } from '../store/favoritesSlice'
import { RootState } from '@/store'

type Album = {
  id: string
  name: string
  artists: { name: string }[]
  images: { url: string }[]
  external_urls: { spotify: string }
}

export default function SpotifyFeed() {
  const [albums, setAlbums] = useState<Album[]>([])
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorites.items)

  const isFavorited = (id: string) =>
    favorites.some((item) => item.id === id && item.type === 'spotify')

  const handleFavorite = (album: Album) => {
    dispatch(
      toggleFavorite({
        id: album.id,
        type: 'spotify',
        data: album,
      })
    )
  }

  const fetchAlbums = async (offsetNum = 0) => {
    try {
      setLoading(true)
      const res = await fetch('/api/spotify-token')
      const { access_token } = await res.json()

      const response = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        params: { limit: 6, offset: offsetNum },
      })

      const fetchedAlbums = response.data.albums.items
      setAlbums((prev) => [...prev, ...fetchedAlbums])
    } catch (error) {
      console.error('Error fetching Spotify feed:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAlbums(offset)
  }, [offset])

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">🎧 Spotify New Releases</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {albums.map((album) => (
          <div
           key={`${album.id}-${Math.random()}`}

            className="relative block bg-white dark:bg-gray-800 p-3 rounded shadow hover:shadow-lg transition"
          >
            {/* ⭐ Star Icon */}
          <div className="absolute top-2 right-2 bg-black/50 p-1 rounded-full">
  <FaStar
    onClick={() => handleFavorite(album)}
    className={`text-xl cursor-pointer transition-transform ${
      isFavorited(album.id)
        ? 'text-yellow-400'
        : 'text-white/80 hover:text-yellow-300'
    } hover:scale-110 hover:drop-shadow-[0_0_6px_gold]`}
  />
</div>



            <a
              href={album.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              {album.images?.[0]?.url ? (
                <img
                  src={album.images[0].url}
                  alt={`${album.name} cover`}
                  className="w-full h-auto rounded"
                />
              ) : (
                <div className="w-full h-40 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">No image</span>
                </div>
              )}
              <p className="text-md font-semibold text-center mt-2">{album.name}</p>
              <p className="text-sm text-center text-gray-600">
                {album.artists.map((a) => a.name).join(', ')}
              </p>
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => setOffset((prev) => prev + 6)}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-green-700 transition"
        >
          {loading ? 'Loading...' : 'Load More Music'}
        </button>
      </div>
    </div>
  )
}
