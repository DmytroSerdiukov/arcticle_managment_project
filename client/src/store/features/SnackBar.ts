import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { AuthAPI } from '../../api/auth'
import LocalStorage from '../../LocalStorage'
import SessionStorage from '../../SessionStorage/SessionStorage'

interface SnackBarState {
  isOpen: boolean
  status: string
  message: string
}

const initialState: SnackBarState = {
  isOpen: false,
  status: 'error',
  message: '',
}

export const snackBarReducer = createSlice({
  name: 'SnackBar',
  initialState,
  reducers: {
    openSnackBar: (state, action) => {
      const { status, message } = action.payload
      return { ...state, isOpen: true, status: status, message: message }
    },
    closeSnackBar: (state) => {
      return { ...state, isOpen: false, message: '', status: '' }
    },
  },
})

export const { openSnackBar, closeSnackBar } = snackBarReducer.actions

export default snackBarReducer.reducer
