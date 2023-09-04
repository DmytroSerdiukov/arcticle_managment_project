import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { AuthAPI } from "../../api/auth";

interface AuthState {
  isAuthorized: boolean;
  user: string;
  error: any;
}

const initialState: AuthState = {
  isAuthorized: false,
  user: "",
  error: {},
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction) => {
      return state;
    },
  },
});

export const { setUserData } = authReducer.actions;

export default authReducer.reducer;

export const authUserThunk = createAsyncThunk(
  "user/auth",
  async (data: any, thunkAPI) => {
    try {
      const res = await AuthAPI.authUser(data);
      thunkAPI.dispatch(setUserData(res));
    } catch (err) {}
  },
);

export const registerUserThunk = createAsyncThunk(
  "user/register",
  async (data: any, thunkAPI) => {
    try {
      const res = await AuthAPI.registerUser(data);
      thunkAPI.dispatch(setUserData(res));
    } catch (err) {}
  },
);
