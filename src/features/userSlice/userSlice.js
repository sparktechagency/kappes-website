import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  business_informations: [],
  createdAt: "",
  email: "",
  facebookId: "",
  full_name: "",
  googleId: "",
  image: "",
  isDeleted: false,
  joinDate: "",
  lastLogin: "",
  loginCount: 0,
  phone: "",
  provider: "",
  recentSearchLocations: [],
  role: "",
  status: "active",
  stripeConnectedAccount: "",
  stripeCustomerId: "",
  tokenVersion: 0,
  updatedAt: "",
  verified: true,
  __v: 0,
  _id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUser: (state) => {
      return initialState;
    },
  },
});

export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user;
export const selectUserProfile = (state) => state.user;
export const selectUserName = (state) => state.user.full_name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserImage = (state) => state.user.image;
