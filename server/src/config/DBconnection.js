import mongoose from 'mongoose';

const DBurl =
  'mongodb+srv://makisV:ZCCWaOjBkQobnlCO@expense-tracker.q94ddrr.mongodb.net/ExpenseTracker?retryWrites=true&w=majority';

const DBconnection = async () => {
  try {
    await mongoose.connect(DBurl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoIndex: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export default DBconnection;
