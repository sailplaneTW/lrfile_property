import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native

import member from './services/member/reducer'
import global from './services/global/reducer'

import logger from 'redux-logger'

const reducers = {
  member: member,
  global: global,
}


const config = {
  key: 'root',
  storage,
}

const reducer = persistCombineReducers(config, reducers)

export default function configureStore() {
  let store = createStore(reducer, applyMiddleware(logger))
  let persistor = persistStore(store)
  return { store, persistor }
}