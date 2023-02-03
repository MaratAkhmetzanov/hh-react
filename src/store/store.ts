import { configureStore } from '@reduxjs/toolkit';
import { searchMiddleware } from './middleware';
import { rootReducer } from './reducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(searchMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
