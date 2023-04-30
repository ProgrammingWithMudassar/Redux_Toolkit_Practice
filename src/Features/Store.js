import { configureStore } from '@reduxjs/toolkit'
import {
  FirstSlice,
  SecondSlice,
  ThirdSlice
} from './Counter/index.js'
import storage from 'redux-persist/es/storage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';



//First
const PersisConfig = {
  key: 'root',
  version: 1,
  storage,
  //blacklisting a store attribute name, will not persist that store attribute.
  blacklist: ['age'],
}

//Second
const rootReducer = combineReducers({
  counter: FirstSlice,
  SecondCounter: SecondSlice,
  ThirdCounter: ThirdSlice,
})

const PersistorReducer  = persistReducer(
  PersisConfig,
  rootReducer
)




const store = configureStore({
  reducer: {
    counter: FirstSlice,
    SecondCounter: SecondSlice,
    ThirdCounter: ThirdSlice,
  }
});

export default store;