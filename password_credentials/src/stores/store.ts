import {configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './reducers/authReducer';
import {persistReducer} from 'redux-persist';

const rootreducers  = combineReducers({
            auth: authReducer
})

const persistConfig = {
    key :'root',
    storage:AsyncStorage,
    whitelist :['auth']
}

const persistedReducer = persistReducer(persistConfig,rootreducers)

export const store = configureStore({
  reducer:persistedReducer
  })

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType< typeof store.getState >;