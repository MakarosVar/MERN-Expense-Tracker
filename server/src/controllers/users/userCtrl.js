import User from '../../models/User.js';
import expressAsyncHandler from 'express-async-handler';

const signUpUser = expressAsyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, password } = req?.body;
  try {
    //check if user already exists
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      throw new Error('User already exists');
    }
    //create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });
    //save new user
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
});

//fetch all users
const fetchAllUsersCtrl = expressAsyncHandler(
  async (req, res, next) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }
);

export { signUpUser, fetchAllUsersCtrl };
