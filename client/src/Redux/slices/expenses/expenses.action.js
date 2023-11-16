import { createAsyncThunk } from "@reduxjs/toolkit";
import {ExpenseEndpoint} from "../../../Utils/baseUrls";
import Axios from "axios";

//create expense

export const createExpenseAction = createAsyncThunk(
    "expense/create",
    async (payload, { rejectWithValue, getState, dispatch }) => {
        const usersToken = getState().users?.userAuth?.token;
        const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${usersToken}`,
        },
        };
        try {
        //httpCall
        const { data } = await Axios.post(
            `${ExpenseEndpoint}`,
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

