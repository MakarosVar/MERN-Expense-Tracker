import mongoose from 'mongoose';

//schema
const userSchema = new mongoose.Schema({
    firstName: {
        required: [true, 'First name is required.'],
        type: String
    },
    lastName: {
        required: [true, 'Last name is required.'],
        type: String
    },
    email: {
        required: [true, 'Email is required.'],
        type: String
    },
    password: {
        required: [true, 'Password is required.'],
        type: String
    },
    isAdmin: { 
        type: Boolean, 
        default: false 
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});