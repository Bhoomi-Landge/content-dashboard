import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode: false,
}

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
  },
})

export const { toggleDarkMode } = preferencesSlice.actions
export default preferencesSlice.reducer
