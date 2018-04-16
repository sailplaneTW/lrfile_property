import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native

import member from './services/member/reducer';

const reducers = {
  member: member,
};


const config = {
  key: 'root',
  storage,
}

const reducer = persistCombineReducers(config, reducers)

export default function configureStore() {
  let store = createStore(reducer)
  let persistor = persistStore(store)
  return { store, persistor }
}