import {configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './reducers/authReducer';
import {persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';
import Reactotron from '../../ReactotronConfig';
import credentialReducers from './reducers/credentialReducers';

const rootreducers  = combineReducers({
            auth: authReducer,
            cred:credentialReducers
})

const persistConfig = {
    key :'root',
    storage:AsyncStorage,
    whitelist :['auth']
}

const persistedReducer = persistReducer(persistConfig,rootreducers)

export const store = configureStore({
  reducer:persistedReducer,
  enhancers: [Reactotron.createEnhancer()],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })
export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType< typeof store.getState >;