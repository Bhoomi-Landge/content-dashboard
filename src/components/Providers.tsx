// 'use client'

// import { ReactNode } from 'react'
// import { Provider as ReduxProvider } from 'react-redux'
// import { store } from '@/store'
// // Add other providers like ThemeProvider, etc. here if needed

// export default function Providers({ children }: { children: ReactNode }) {
//   return (
//     <ReduxProvider store={store}>
//       {children}
//     </ReduxProvider>
//   )
// }
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
