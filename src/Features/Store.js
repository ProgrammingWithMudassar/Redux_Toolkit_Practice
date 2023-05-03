import { configureStore } from '@reduxjs/toolkit'
import {
  FirstSlice,
  SecondSlice,
  ThirdSlice
} from './Counter/index.js'

import storage from 'redux-persist/es/storage'
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from './api/Pokemon.js'


//First
const PersisConfig = {
  key: 'Data',
  version: 1,
  storage,
  blacklist: ['SecondCounter'],
}

//Second
const rootReducer = combineReducers({
  counter: FirstSlice,
  SecondCounter: SecondSlice,
  ThirdCounter: ThirdSlice,
})

const PersistedReducer = persistReducer(PersisConfig, rootReducer)

const store = configureStore({
  reducer:{
    PersistedReducer : PersistedReducer,
    [pokemonApi.reducerPath] : pokemonApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)


export default store;