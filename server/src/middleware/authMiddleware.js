import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import expressAsyncHandler from "express-async-handler";


const authMiddleware= expressAsyncHandler(async (req, res, next) => {
    let token;

    if(req.headers?.authorization?.startsWith('Bearer')){
        token=req?.headers?.authorization?.split(' ')[1];
    }else{

    }
})