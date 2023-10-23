import Express from "express";
import  createIncomeCtrl  from "../../controllers/income/incomeCtrl.js";

const incomeRoute = Express.Router();
incomeRoute.post("/", createIncomeCtrl);

export default incomeRoute;
