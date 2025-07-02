// import { configureStore } from '@reduxjs/toolkit'
// import preferencesReducer from '@/slices/preferencesSlice'

// export const store = configureStore({
//   reducer: {
//     preferences: preferencesReducer,
//   },
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
// src/components/Providers.tsx
'use client'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '@/store'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
