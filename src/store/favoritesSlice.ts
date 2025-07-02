import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type FavoriteItem = {
  id: string // force id to always be string
  type: 'movie' | 'news' | 'tweet' | 'spotify'
  data: any
}

interface FavoritesState {
  items: FavoriteItem[]
  isDarkMode: boolean
}

const initialState: FavoritesState = {
  items: [],
  isDarkMode: false,
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      const { id, type } = action.payload

      const exists = state.items.find(
        (item) => item.id === id && item.type === type
      )

      if (exists) {
        state.items = state.items.filter(
          (item) => !(item.id === id && item.type === type)
        )
      } else {
        state.items.push({
          ...action.payload,
          id: String(id), // ensure id is stored as string
        })
      }
    },

    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload
    },
  },
})

export const { toggleFavorite, setDarkMode } = favoritesSlice.actions
export default favoritesSlice.reducer
