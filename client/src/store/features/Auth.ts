import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { AuthAPI } from "../../api/auth";
import LocalStorage from "../../LocalStorage";

interface AuthState {
  isAuthorized: boolean;
  user: any;
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
      state.isAuthorized = true;
      const username = action.payload;
      state.user = username;
      console.log("reducer state", { ...state });
    },
    logoutUser: (state, action: PayloadAction) => {
      state.isAuthorized = false;
      state.user = "";
      LocalStorage.removeToken();
      console.log("reducer state", { ...state });
    },
  },
});

export const { setUserData, logoutUser } = authReducer.actions;

export default authReducer.reducer;

export const authUserThunk = createAsyncThunk(
  "user/auth",
  async (data: any, thunkAPI) => {
    try {
      const res = await AuthAPI.authUser(data);
      console.log(res);
      LocalStorage.setToken(res.jwt);
      thunkAPI.dispatch(setUserData(res.username));
    } catch (err) {}
  },
);

export const registerUserThunk = createAsyncThunk(
  "user/register",
  async (data: any, thunkAPI) => {
    try {
      const res = await AuthAPI.registerUser(data);
      console.log(res);
      LocalStorage.setToken(res.jwt);
      thunkAPI.dispatch(setUserData(res.username));
    } catch (err) {}
  },
);
