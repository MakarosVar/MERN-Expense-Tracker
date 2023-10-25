import Express from 'express';
import {
  createExpenseCtrl,
  fetchAllExpensesCtrl,
  fetchOneExpenseCtrl,
  updateExpenseCtrl,
  deleteExpenseCtrl,
} from '../../controllers/expenses/expenseCtrl.js';

const expenseRoute = Express.Router();
expenseRoute.post('/', createExpenseCtrl);
expenseRoute.get('/', fetchAllExpensesCtrl);
expenseRoute.get('/:id', fetchOneExpenseCtrl);
expenseRoute.put('/:id', updateExpenseCtrl);
expenseRoute.delete('/:id', deleteExpenseCtrl);

export default expenseRoute;
