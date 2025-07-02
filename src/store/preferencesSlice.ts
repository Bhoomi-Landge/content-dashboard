// // src/store/preferencesSlice.ts

// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// type PreferencesState = {
//   darkMode: boolean
//   categories: string[]
// }

// const initialState: PreferencesState = {
//   darkMode: false,
//   categories: []
// }

// const preferencesSlice = createSlice({
//   name: 'preferences',
//   initialState,
//   reducers: {
//     toggleDarkMode(state) {
//       state.darkMode = !state.darkMode
//     },
//     setCategories(state, action: PayloadAction<string[]>) {
//       state.categories = action.payload
//     }
//   }
// })

// export const { toggleDarkMode, setCategories } = preferencesSlice.actions
// export default preferencesSlice.reducer
// src/slices/preferencesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PreferencesState {
  categories: string[]
}

const initialState: PreferencesState = {
  categories: [], // default empty
}

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload
    },
  },
})

export const { setCategories } = preferencesSlice.actions
export default preferencesSlice.reducer
