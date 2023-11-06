import {configureStore} from '@reduxjs/toolkit';    
import userReducer from '../slices/users/UserSlice';

const store = configureStore({
    reducer: {
        users:userReducer}
});

export default store;