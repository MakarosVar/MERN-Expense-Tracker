import jwt from "jsonwebtoken";
import User from "../models/User.js";
import expressAsyncHandler from "express-async-handler";

const authMiddleware = expressAsyncHandler(async (req, res, next) => {
  let token;

  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req?.headers?.authorization?.split(" ")[1];
    try {
      if (token) {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decodedToken);
        req.user = await User.findById(decodedToken.id);
        console.log(req.user);
        next();
      }
    } catch {
      res.status(401);
      throw new Error("Not authorized, token failed");      
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");    
  }
});
export default authMiddleware;