import expressAsyncHandler from 'express-async-handler';
import Expense from '../../models/Expense.js';

//create new income

const createExpenseCtrl = expressAsyncHandler(
  async (req, res, next) => {
    const { title, description, amount, type } = req?.body;
    try {
      const newExpense = new Expense({
        title,
        description,
        amount,
        type,
        user: req.user._id,
      });
      await newExpense.save();
      res
        .status(201)
        .json({ message: 'Expense created successfully' });
    } catch (error) {
      next(error);
    }
  }
);

//fetch all Expenses

const fetchAllExpensesCtrl = expressAsyncHandler(
  async (req, res, next) => {
    try {
      const {page} = req.query;
      const expenses = await Expense.paginate({},{ page: Number(page), limit: 10 });
      res.status(200).json(expenses);
    } catch (error) {
      next(error);
    }
  }
);

//fetch one Expense

const fetchOneExpenseCtrl = expressAsyncHandler(
  async (req, res, next) => {
    try {
      const expense = await Expense.findById(req.params.id);
      res.status(200).json(expense);
    } catch (error) {
      next(error);
    }
  }
);

//update expenses

const updateExpenseCtrl = expressAsyncHandler(
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { title, description, amount, type } = req.body;
      const expense = await Expense.findByIdAndUpdate(
        id,
        {
          title,
          description,
          amount,
          type,
        },
        { new: true }
      );
      res.status(200).json(expense);
    } catch (error) {
      next(error);
    }
  }
);

//delete expense

const deleteExpenseCtrl = expressAsyncHandler(
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await Expense.findByIdAndDelete(id);
      res
        .status(200)
        .json({ message: 'Expense deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
);

export {
  createExpenseCtrl,
  fetchAllExpensesCtrl,
  fetchOneExpenseCtrl,
  updateExpenseCtrl,
  deleteExpenseCtrl,
};
