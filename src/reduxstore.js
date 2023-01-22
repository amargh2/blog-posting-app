import { configureStore } from "@reduxjs/toolkit";
import authReducer from './tokenSlice'

export const store =  configureStore({
  reducer: {authReducer}
})

