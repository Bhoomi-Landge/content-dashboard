// import { createSlice } from '@reduxjs/toolkit'

// const moviesSlice = createSlice({
//   name: 'movies',
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     setMovies: (state, action) => {
//       state.items = action.payload
//     },
//   },
// })

// export const { setMovies } = moviesSlice.actions
// export default moviesSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import uniqBy from 'lodash/uniqBy'

interface Movie {
  id: string;
  [key: string]: any;
}

interface MoviesState {
  items: Movie[];
}

const initialState: MoviesState = {
  items: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: { payload: Movie[] }) => {
      state.items = uniqBy(action.payload, 'id');
    },
  },
})

export const { setMovies } = moviesSlice.actions
export default moviesSlice.reducer
