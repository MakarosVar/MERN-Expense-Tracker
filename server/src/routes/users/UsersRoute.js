import Express from "express";
import  signUpUser  from "../../controllers/users/userCtrl.js";

const usersRoute = Express.Router();
usersRoute.post("/signup", signUpUser);


export default usersRoute;