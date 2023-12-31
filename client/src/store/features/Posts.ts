import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { PostsAPI } from '../../api/posts'

interface ReducerState {
  posts: any
  searched: any
  isFetching: boolean
}

const initialState: ReducerState = {
  posts: [],
  searched: [],
  isFetching: false,
}

const postsReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setFetching: (state, action) => {
      state.isFetching = action.payload
    },
    setPosts: (state, action: PayloadAction) => {
      state.posts = action.payload
      state.searched = state.posts
    },
    reversePosts: (state) => {
      state.searched = state.posts.reverse(
        (a: any, b: any) => b.pubDate - a.pubDate
      )
    },
    searchPosts: (state, action) => {
      state.searched = state.posts.filter((post: any) =>
        post.title.includes(action.payload)
      )
    },
    // createPost: (state, action: PayloadAction) => {
    //   state.posts = [action.payload, ...state.posts];
    // },
    // deletePost: (state, action: PayloadAction) => {
    //   state.posts.filter((el: any) => el.id != action.payload);
    // },
  },
})

export const { setFetching, setPosts, reversePosts, searchPosts } =
  postsReducer.actions

export default postsReducer.reducer

export const getPostsThunk = createAsyncThunk(
  'posts/get',
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setFetching(true))
      const response = await PostsAPI.getPosts()
      thunkAPI.dispatch(setPosts(response))
      thunkAPI.dispatch(setFetching(false))
    } catch (err) {}
  }
)

export const createPostThunk = createAsyncThunk(
  'posts/create',
  async (data: any, { rejectWithValue }) => {
    try {
      await PostsAPI.createPost(data)
      //   return response.data.user;
    } catch (err) {
      //   return rejectWithValue(err.response.data);
    }
  }
)

export const updatePostThunk = createAsyncThunk(
  'posts/update',
  async (data: any) => {
    try {
      const response = await PostsAPI.updatePost(data)
    } catch (err) {}
  }
)

export const deletePostThunk = createAsyncThunk(
  'posts/delete',
  async (postId: string, { rejectWithValue }) => {
    try {
      await PostsAPI.deletePost(postId)
      //   return response.data.user;
    } catch (err) {
      //   return rejectWithValue(err.response.data);
    }
  }
)
