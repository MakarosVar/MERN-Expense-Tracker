import {configureStore} from '@reduxjs/toolkit';    
import userReducer from '../slices/users/UserSlice';

const store = configureStore({
    reducer: {}
});

export default store;