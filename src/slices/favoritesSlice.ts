// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interface FavoriteItem {
//   id: string
//   type: 'news' | 'tweet' | 'movie' | 'spotify'
//   data: any
// }

// interface FavoritesState {
//   items: FavoriteItem[]
//   isDarkMode: boolean
// }

// const initialState: FavoritesState = {
//   items: [],
//   isDarkMode: false,
// }

// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     toggleFavorite: (state, action: PayloadAction<FavoriteItem>) => {
//       const exists = state.items.some(
//         (fav) => fav.id === action.payload.id && fav.type === action.payload.type
//       )

//       if (exists) {
//         state.items = state.items.filter(
//           (fav) => !(fav.id === action.payload.id && fav.type === action.payload.type)
//         )
//       } else {
//         state.items.push(action.payload)
//       }
//     },
//     setDarkMode: (state, action: PayloadAction<boolean>) => {
//       state.isDarkMode = action.payload
//     },
//   },
// })

// export const { toggleFavorite, setDarkMode } = favoritesSlice.actions
// export default favoritesSlice.reducer
// src/slices/favoritesSlice.ts






// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interface FavoriteItem {
//   id: string
//   type: 'news' | 'tweet' | 'movie' | 'spotify'
//   data: any
// }

// interface FavoritesState {
//   items: FavoriteItem[]
//   isDarkMode: boolean
// }

// const initialState: FavoritesState = {
//   items: [],
//   isDarkMode: false,
// }

// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     toggleFavorite: (state, action: PayloadAction<FavoriteItem>) => {
//       const exists = state.items.some(
//         (fav) => fav.id === action.payload.id && fav.type === action.payload.type
//       )
//       if (exists) {
//         state.items = state.items.filter(
//           (fav) => !(fav.id === action.payload.id && fav.type === action.payload.type)
//         )
//       } else {
//         state.items.push(action.payload)
//       }
//     },
//     setDarkMode: (state, action: PayloadAction<boolean>) => {
//       state.isDarkMode = action.payload
//     },
//   },
// })

// export const { toggleFavorite, setDarkMode } = favoritesSlice.actions
// export default favoritesSlice.reducer








// src/slices/favoritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FavoriteItem = {
  id: string
  type: 'movie' | 'news' | 'tweet' | 'spotify'
  data: any
}

interface FavoritesState {
  isDarkMode: boolean
  items: FavoriteItem[]
}

const initialState: FavoritesState = {
  isDarkMode: false,
  items: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      const id = String(action.payload.id)
      const exists = state.items.find(
        (f) => f.id === id && f.type === action.payload.type
      )

      if (exists) {
        state.items = state.items.filter(
          (f) => !(f.id === id && f.type === action.payload.type)
        )
      } else {
        state.items.push({ ...action.payload, id })
      }
    },
  },
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
