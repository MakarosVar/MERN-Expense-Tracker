import { createSlice } from "@reduxjs/toolkit";
import { RegisterUserAction, loginUserAction } from "./user.action";

//slices

const UserSlices = createSlice({
  name: "users",
  initialState: {
    userAuth: null,
    userLoading: false,
    AppError: null,
    ServerError: null,
  },
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
      state.AppError = action?.payload?.msg;
      state.ServerError = action?.payload?.msg;
    });

    //register

    builder.addCase(RegisterUserAction.pending, (state, action) => {
      state.userLoading = true;
      state.AppError = undefined;
      state.ServerError = undefined;
    });

    builder.addCase(RegisterUserAction.fulfilled, (state, action) => {
      state.userAuth = action?.payload;
      state.userLoading = false;
      state.AppError = undefined;
      state.ServerError = undefined;
    });

    builder.addCase(RegisterUserAction.rejected, (state, action) => {
      state.userLoading = false;
      state.AppError = action?.payload?.msg;
      state.ServerError = action?.payload?.msg;
    });
  },
});
const userReducer = UserSlices.reducer;
export default userReducer;
