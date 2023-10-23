import express from 'express';
import DBconnection from './config/DBconnection.js';
import usersRoute from './routes/users/UsersRoute.js';
import incomeRoute from './routes/income/IncomeRoute.js';
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

//income routes
app.use('/api/income', incomeRoute);


//Error handler
app.use(errorHandler);
app.use(notFound);

export default app;
