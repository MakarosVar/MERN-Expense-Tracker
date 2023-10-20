import express from "express";
import DBconnection from "./config/DBconnection.js";
import usersRoute from "./routes/users/UsersRoute.js";

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
};

app.use(logger);

DBconnection();

app.use('/api/users', usersRoute);

export default app;
