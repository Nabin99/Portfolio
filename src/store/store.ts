import { configureStore } from '@reduxjs/toolkit';
import { messageApi } from '../services/messageApi';
import { worksApi } from '../services/worksApi';

export const store = configureStore({
  reducer: {
   [worksApi.reducerPath]: worksApi.reducer,
   [messageApi.reducerPath]: messageApi.reducer
  },
  middleware: (getDefaultMiddleware)=>
  getDefaultMiddleware().concat(worksApi.middleware,messageApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch