import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices/rootSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createWhitelistFilter } from 'redux-persist-transform-filter';

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    createWhitelistFilter("tests", ["allTests"]),
    createWhitelistFilter("result", ["results"]),
    createWhitelistFilter("auth", ["dictionary", "homework"]),
  ],
  whitelist: ["tests", "result", "auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
 
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
 
export const localStore = persistStore(store);
export default store;