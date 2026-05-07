import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import mainSlice from './MainSlice';

const mainPersistConfig = {
  key: 'main',
  storage: AsyncStorage,
  whitelist: ['listRequest'],
};

const rootReducer = combineReducers({
  main: persistReducer(mainPersistConfig, mainSlice.reducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
