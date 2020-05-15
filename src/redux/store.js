import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
// Persist
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import ReduxThunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk))
const persistedStore = persistStore(store)

module.exports = { store, persistedStore }
