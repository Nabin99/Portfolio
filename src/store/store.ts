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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch