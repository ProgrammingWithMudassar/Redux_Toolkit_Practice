import { configureStore } from '@reduxjs/toolkit'
import {
  FirstSlice,
  SecondSlice,
  ThirdSlice
} from './Counter/index.js'

import storage from 'redux-persist/es/storage'
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

//First
const PersisConfig = {
  key: 'root',
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
  reducer: PersistedReducer,
})


// const store = configureStore({
//   reducer: {
//     counter: FirstSlice,
//     SecondCounter: SecondSlice,
//     ThirdCounter: ThirdSlice,
//   }
// });

export default store;