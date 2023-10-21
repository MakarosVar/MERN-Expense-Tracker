import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

//schema
const userSchema = new mongoose.Schema({
  firstName: {
    required: [true, 'First name is required.'],
    type: String,
  },
  lastName: {
    required: [true, 'Last name is required.'],
    type: String,
  },
  email: {
    required: [true, 'Email is required.'],
    type: String,
  },
  password: {
    required: [true, 'Password is required.'],
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//hash password before saving
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  user.password = await bcrypt.hash(user.password, 10);
  next();
});

//model
const User = mongoose.model('User', userSchema);
export default User;
