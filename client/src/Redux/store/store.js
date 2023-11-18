import {configureStore} from '@reduxjs/toolkit';    
import userReducer from '../slices/users/UserSlice';
import expenseReducer from '../slices/expenses/expensesSlice'; 

const store = configureStore({
    reducer: {
        users: userReducer,
        expenses: expenseReducer,
    },
});

export default store;