import { createSlice } from "@reduxjs/toolkit";
import jsCookie from "js-cookie";

// Create a slice of state for authentication and authorization using email and password with Redux Toolkit
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: jsCookie.get("user") ? JSON.parse(jsCookie.get("user")) : null,
    token: jsCookie.get("token") ? jsCookie.get("token") : null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      jsCookie.set("token", action.payload.token);
      jsCookie.set("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      jsCookie.remove("token");
      jsCookie.remove("user");
    },
    // check isLogged in or not by checking token
    checkAuth: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

// Export actions
export const { login, logout, checkAuth } = authSlice.actions;

// Export selectors
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;

// Export reducer
export default authSlice.reducer;
