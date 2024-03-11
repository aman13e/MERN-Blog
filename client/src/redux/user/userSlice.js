import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SignInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    SignInSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    SignInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { SignInStart, SignInSuccess, SignInFailure } = userSlice.actions;
export default userSlice.reducer;
