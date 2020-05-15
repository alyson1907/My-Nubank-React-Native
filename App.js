import React from 'react'
import Routes from './src/routes'
// Redux
import { store, persistedStore } from './src/redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

export default function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}

