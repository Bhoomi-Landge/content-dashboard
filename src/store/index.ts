
// import { configureStore } from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// import favoritesReducer from '@/slices/favoritesSlice'
// import contentReducer from '@/slices/contentSlice'
// import moviesReducer from '@/slices/moviesSlice'
// import spotifyReducer from '@/slices/spotifySlice'
// import searchReducer from '@/slices/searchSlice' // ✅ Import search slice

// const favoritesPersistConfig = {
//   key: 'favorites',
//   storage,
// }

// const persistedFavoritesReducer = persistReducer(favoritesPersistConfig, favoritesReducer)

// export const store = configureStore({
//   reducer: {
//     favorites: persistedFavoritesReducer,
//     content: contentReducer,
//     movies: moviesReducer,
//     spotify: spotifyReducer,
//     search: searchReducer, // ✅ Add it here
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// })

// export const persistor = persistStore(store)

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch









// // src/store/index.ts
// import { configureStore } from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// import favoritesReducer from '@/slices/favoritesSlice'
// import contentReducer from '@/slices/contentSlice'
// import moviesReducer from '@/slices/moviesSlice'
// import spotifyReducer from '@/slices/spotifySlice'
// import searchReducer from '@/slices/searchSlice'

// const favoritesPersistConfig = {
//   key: 'favorites',
//   storage,
// }

// const persistedFavoritesReducer = persistReducer(favoritesPersistConfig, favoritesReducer)

// export const store = configureStore({
//   reducer: {
//     favorites: persistedFavoritesReducer,
//     content: contentReducer,
//     movies: moviesReducer,
//     spotify: spotifyReducer,
//     search: searchReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// })

// export const persistor = persistStore(store)
// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch














import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import preferencesReducer from '@/slices/preferencesSlice'
import favoritesReducer from '@/slices/favoritesSlice'
import contentReducer from '@/slices/contentSlice'
import moviesReducer from '@/slices/moviesSlice'
import spotifyReducer from '@/slices/spotifySlice'
import searchReducer from '@/slices/searchSlice'

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
}

const persistedFavoritesReducer = persistReducer(favoritesPersistConfig, favoritesReducer)

export const store = configureStore({
  reducer: {
    favorites: persistedFavoritesReducer,
    content: contentReducer,
    movies: moviesReducer,
    spotify: spotifyReducer,
    search: searchReducer,
     preferences: preferencesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
