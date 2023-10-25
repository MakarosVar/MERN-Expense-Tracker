import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  title: {
    required: [true, 'Title is required.'],
    type: String,
  },
  description: {
    required: [true, 'Description is required.'],
    type: String,
  },
  amount: {
    required: [true, 'Amount is required.'],
    type: Number,
  },
  type: {
    type: String,
    default: 'income',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, //this is the id of the user
    ref: 'User',
    required: [true, 'User is required.'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Expense = mongoose.model('Expense', expenseSchema);
export default Expense;
