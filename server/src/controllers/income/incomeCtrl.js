import expressAsyncHandler from "express-async-handler";
import Income from "../../models/Income.js";

//create new income

const createIncomeCtrl = expressAsyncHandler(async (req, res, next) => {
  const { title, description, amount, type } = req?.body;
  try {
    const newIncome = new Income({
      title,
      description,
      amount,
      type,
      user: req.user._id,
    });
    await newIncome.save();
    res.status(201).json({ message: "Income created successfully" });
  } catch (error) {
    next(error);
  }
});

//fetch all incomes

const fetchAllIncomesCtrl = expressAsyncHandler(async (req, res, next) => {
  try {
    const incomes = await Income.find({});
    res.status(200).json(incomes);
  } catch (error) {
    next(error);
  }
});

//fetch one income

const fetchOneIncomeCtrl = expressAsyncHandler(async (req, res, next) => {
  try {
    const income = await Income.findById(req.params.id);
    res.status(200).json(income);
  } catch (error) {
    next(error);
  }
});

//update income

const updateIncomeCtrl = expressAsyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, amount, type } = req.body;
    const income = await Income.findByIdAndUpdate(
      id,
      {
        title,
        description,
        amount,
        type,
      },
      { new: true }
    );
    res.status(200).json(income);
  } catch (error) {
    next(error);
  }
});

//delete income

const deleteIncomeCtrl = expressAsyncHandler(async (req, res, next) => {
    try {
        const { id } = req.params;
        await Income.findByIdAndDelete(id);
        res.status(200).json({ message: "Income deleted successfully" });
    } catch (error) {
        next(error);
    }
});

export { createIncomeCtrl, fetchAllIncomesCtrl, fetchOneIncomeCtrl, updateIncomeCtrl, deleteIncomeCtrl };
