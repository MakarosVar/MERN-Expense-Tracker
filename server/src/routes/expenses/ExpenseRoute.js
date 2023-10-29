import Express from 'express';
import {
  createExpenseCtrl,
  fetchAllExpensesCtrl,
  fetchOneExpenseCtrl,
  updateExpenseCtrl,
  deleteExpenseCtrl,
} from '../../controllers/expenses/expenseCtrl.js';
import authMiddleware from '../../middleware/authMiddleware.js';

const expenseRoute = Express.Router();
expenseRoute.post('/', authMiddleware, createExpenseCtrl);
expenseRoute.get('/', authMiddleware, fetchAllExpensesCtrl);
expenseRoute.get('/:id', authMiddleware, fetchOneExpenseCtrl);
expenseRoute.put('/:id', authMiddleware, updateExpenseCtrl);
expenseRoute.delete('/:id', authMiddleware, deleteExpenseCtrl);

export default expenseRoute;
