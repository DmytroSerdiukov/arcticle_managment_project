import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CounterState {
  posts: any;
}

const initialState: CounterState = {
  posts: [],
};

export const counterSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction) => {
      state.posts = [...state.posts, action.payload];
    },
    // deletePost: (state, action: PayloadAction) => {
    //   state.posts.filter((el: any) => el.id != action.payload);
    // },
  },
});

export const {} = counterSlice.actions;

export const selectCount = (state: RootState) => state.posts.posts;

export default counterSlice.reducer;

const getPosts = createAsyncThunk("posts/get", async () => {
  try {
    //   const response = await userAPI.updateById(id);
    //   return response.data.user;
  } catch (err) {
    //   return rejectWithValue(err.response.data);
  }
});

const createPost = createAsyncThunk(
  "posts/create",
  async (postId, { rejectWithValue }) => {
    try {
      //   const response = await userAPI.updateById(id);
      //   return response.data.user;
    } catch (err) {
      //   return rejectWithValue(err.response.data);
    }
  },
);

const updatePost = createAsyncThunk(
  "posts/update",
  async (postId, { rejectWithValue }) => {
    try {
      //   const response = await userAPI.updateById(id);
      //   return response.data.user;
    } catch (err) {
      //   return rejectWithValue(err.response.data);
    }
  },
);

const deletePost = createAsyncThunk(
  "posts/delete",
  async (postId, { rejectWithValue }) => {
    try {
      //   const response = await userAPI.updateById(id);
      //   return response.data.user;
    } catch (err) {
      //   return rejectWithValue(err.response.data);
    }
  },
);
