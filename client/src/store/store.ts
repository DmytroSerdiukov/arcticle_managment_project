import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/Auth'
import postsReducer from './features/Posts'
import snackBarReducer from './features/SnackBar'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    snackbar: snackBarReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
