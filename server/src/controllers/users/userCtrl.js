import User from "../../models/User.js";

const signUpUser =async (req, res) => {
  try {
    //check if user already exists
    const userExists=await User.findOne({email: req.body.email});
  } catch (error) {
    
  }
};


export default signUpUser;
