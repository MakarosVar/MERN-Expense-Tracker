import { createSlice } from "@reduxjs/toolkit";
import { createExpenseAction, getAllExpensesAction, updateExpenseAction} from "./expenses.action";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {},
  extraReducers: (builder) => {
    //create expense
    builder.addCase(createExpenseAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(createExpenseAction.fulfilled, (state, action) => {
      state.loading = false;
      state.expenseCreated = action?.payload;
      state.expAppError = undefined;
      state.expServerError = undefined;
    });

    builder.addCase(createExpenseAction.rejected, (state, action) => {
      state.userLoading = false;
      state.expAppError = action?.payload?.msg;
      state.expServerError = action?.payload?.msg;
    });

    //update expense

    builder.addCase(updateExpenseAction.pending, (state, action) => {
        state.loading = true;
    });

    builder.addCase(updateExpenseAction.fulfilled, (state, action) => {
        state.loading = false;
        state.expenseUpdated = action?.payload;
        state.expAppError = undefined;
        state.expServerError = undefined;
    });

    builder.addCase(updateExpenseAction.rejected, (state, action) => {
      state.loading = false;
      state.expAppError = action?.payload?.msg;
      state.expServerError = action?.payload?.msg;
    });

    //get all expenses

    builder.addCase(getAllExpensesAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllExpensesAction.fulfilled, (state, action) => {
      state.loading = false;
      state.expensesList = action?.payload;
      state.expAppError = undefined;
      state.expServerError = undefined;
    });
    builder.addCase(getAllExpensesAction.rejected, (state, action) => {
      state.loading = false;
      state.expAppError = action?.payload?.msg;
      state.expServerError = action?.payload?.msg;
    });
  },
});

const expenseReducer = expenseSlice.reducer;
export default expenseReducer;
