import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoading = true;
      state.user = action.payload;
    },
    logOut: (state, action) => {
      state.isLoading = false;
      state.user = null;
    },
  },
});

export default authReducer.reducer;
export const { login, logOut } = authReducer.actions;
