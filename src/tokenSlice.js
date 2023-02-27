import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  userInfo: {},
  userToken: '',
  error: null,
  success: false
}

//per redux docs: data appears to be mutated 'directly' but under the hood new immutable state is being mapped with immer library

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    setToken: ((state, action) => state.userToken = action.payload),
    setSuccess: ((state, action) => state.success = action.payload),
    setLoading: ((state, action) => state.loading = action.payload)
  },
  extraReducers: {}
})

export const selectUserToken = (state) => state.userToken

export const {setToken} = authSlice.actions

export default authSlice.reducer