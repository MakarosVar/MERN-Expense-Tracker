import { createSlice } from "@reduxjs/toolkit";
import { createExpenseAction } from "./expenses.action";


const expenseSlice = createSlice({
    name: "expenses",
    initialState: {},
    extraReducers: (builder) => {

        //create expense
        builder.addCase(createExpenseAction.pending, (state, action) => {
            state.userLoading = true;
            state.AppError = undefined;
            state.ServerError = undefined;
        });

        builder.addCase(createExpenseAction.fulfilled, (state, action) => {
            state.userAuth = action?.payload;
            state.userLoading = false;
            state.AppError = undefined;
            state.ServerError = undefined;
        });

        builder.addCase(createExpenseAction.rejected, (state, action) => {
            state.userLoading = false;
            state.AppError = action?.payload?.msg;
            state.ServerError = action?.payload?.msg;
        });
    },
});
