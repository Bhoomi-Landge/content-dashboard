// import { createSlice } from '@reduxjs/toolkit'

// const spotifySlice = createSlice({
//   name: 'spotify',
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     setSpotifyTracks: (state, action) => {
//       state.items = action.payload
//     },
//   },
// })

// export const { setSpotifyTracks } = spotifySlice.actions
// export default spotifySlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import uniqBy from 'lodash/uniqBy'

interface SpotifyTrack {
  id: string
  [key: string]: any
}

interface SpotifyState {
  items: SpotifyTrack[]
}

const initialState: SpotifyState = {
  items: [],
}

const spotifySlice = createSlice({
  name: 'spotify',
  initialState,
  reducers: {
    setSpotifyTracks: (state, action: { payload: SpotifyTrack[] }) => {
      state.items = uniqBy(action.payload, 'id')
    },
  },
})

export const { setSpotifyTracks } = spotifySlice.actions
export default spotifySlice.reducer
