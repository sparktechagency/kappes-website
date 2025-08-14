import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  if (typeof window !== "undefined") {
    return {
      role: null,
      accessToken: localStorage.getItem("accessToken") || null,
      refreshToken: localStorage.getItem("refreshToken") || null,
    };
  }
  return {
    role: null,
    accessToken: null,
    refreshToken: null,
  };
};

const initialState = getInitialState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
      console.log("user", state.role);
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
      localStorage.setItem("refreshToken", action.payload);
    },
    login: (state, action) => {
      const { role, accessToken, refreshToken } = action.payload;

      // Update state
      state.role = role;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;

      // Update localStorage
      if (typeof window !== "undefined") {
        if (accessToken) localStorage.setItem("accessToken", accessToken);
        if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
      }
    },
    // Removed isLoggedIn reducer as it should be a selector
    logout: (state) => {
      // Clear state
      state.role = null;
      state.accessToken = null;
      state.refreshToken = null;

      // Clear localStorage
      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    },
  },
});

export const { setRole, setAccessToken, setRefreshToken, login, logout } =
  authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state) => {
  if (typeof window === "undefined") return false;

  const accessToken =
    state.auth.accessToken || localStorage.getItem("accessToken");
  return accessToken !== null;
};

export const selectRole = (state) => state.auth.role;

export const selectAccessToken = (state) => {
  if (typeof window === "undefined") return null;
  return state.auth.accessToken || localStorage.getItem("accessToken");
};

export default authSlice.reducer;
