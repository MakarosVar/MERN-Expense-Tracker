import express from 'express';
import DBconnection from './config/DBconnection.js';
import usersRoute from './routes/users/UsersRoute.js';
import {
  errorHandler,
  notFound,
} from './middleware/errorMiddleware.js';

const app = express();

//connect to DB
DBconnection();

//middlewares
app.use(express.json());

//routes
app.use('/api/users', usersRoute);

//Error handler
app.use(errorHandler);
app.use(notFound);

export default app;
