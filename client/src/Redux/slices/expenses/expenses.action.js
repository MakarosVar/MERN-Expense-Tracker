import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExpenseEndpoint } from "../../../Utils/baseUrls";
import Axios from "axios";

//create expense

export const createExpenseAction = createAsyncThunk(
  "expense/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const usersToken = getState().users?.userAuth?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${usersToken}`,
      },
    };
    try {
      //httpCall
      const { data } = await Axios.post(`${ExpenseEndpoint}`, payload, config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//update expense

export const updateExpenseAction = createAsyncThunk(
  "expense/update",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const usersToken = getState().users?.userAuth?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${usersToken}`,
      },
    };
    try {
      //httpCall
      const { data } = await Axios.put(
        `${ExpenseEndpoint}/${payload?.id}`,
        payload,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//get all expenses

export const getAllExpensesAction = createAsyncThunk(
  "expense/getAll",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    const usersToken = getState().users?.userAuth?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${usersToken}`,
      },
    };
    try {
      //httpCall
      const { data } = await Axios.get(
        `${ExpenseEndpoint}?page=${payload}`,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);