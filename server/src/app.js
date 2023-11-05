import express from 'express';
import DBconnection from './config/DBconnection.js';
import usersRoute from './routes/users/UsersRoute.js';
import incomeRoute from './routes/income/IncomeRoute.js';
import expenseRoute from './routes/expenses/ExpenseRoute.js';
import {
  errorHandler,
  notFound,
} from './middleware/errorMiddleware.js';
import cors from 'cors';

const app = express();

//connect to DB
DBconnection();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/users',cors(), usersRoute);

//income routes
app.use('/api/income', incomeRoute);

//expense routes
app.use('/api/expenses', expenseRoute);

//Error handler
app.use(errorHandler);
app.use(notFound);

export default app;
