// src/app/redux/store.ts
'use client';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice'; // Make sure this file exists too

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Optional but recommended for TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
