import User from '../../models/User.js';
import expressAsyncHandler from 'express-async-handler';
import generateToken from '../../middleware/generateToken.js';

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

//login user
const loginUserCtrl = expressAsyncHandler(async (req, res, next) => {

  const { email, password } = req?.body;
  //check if user exists
  const userFound = await User.findOne({ email: email });
  //check if password is correct
  if (userFound && (await userFound.comparePassword(password))) {
    res.status(200).json({
      _id: userFound._id,
      firstName: userFound.firstName,
      lastName: userFound.lastName,
      email: userFound.email,
      isAdmin: userFound.isAdmin,
      token: generateToken(userFound._id),
    });
  } else {
    throw new Error('Invalid email or password');
  }  

});


export { signUpUser, fetchAllUsersCtrl,loginUserCtrl };
