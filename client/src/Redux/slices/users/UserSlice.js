import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction } from "./user.action";

//slices

const UserSlices = createSlice({
  name: "user",
  initialState: {},
  extraReducers: (builder) => {
    //login
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.userLoading = true;
      state.AppError = undefined;
      state.ServerError = undefined;
    });

    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.userAuth = action?.payload;
      state.userLoading = false;
      state.AppError = undefined;
      state.ServerError = undefined;
    });

    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.userLoading = false;
      state.AppError = action?.payload?.message;
      state.ServerError = action?.payload?.message;
    });
  },
});

export default UserSlices.reducer;
