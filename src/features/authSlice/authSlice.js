import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    register: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    resetPassword: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    forgotPassword: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const {
  setUser,
  setToken,
  login,
  register,
  resetPassword,
  forgotPassword,
  logout,
} = authSlice.actions;
export default authSlice.reducer;
