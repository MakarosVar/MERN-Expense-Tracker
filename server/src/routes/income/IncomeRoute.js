import Express from "express";
import  {createIncomeCtrl,fetchAllIncomesCtrl}  from "../../controllers/income/incomeCtrl.js";

const incomeRoute = Express.Router();
incomeRoute.post("/", createIncomeCtrl);
incomeRoute.get("/", fetchAllIncomesCtrl);

export default incomeRoute;
