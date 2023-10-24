import Express from "express";
import {
  createIncomeCtrl,
  fetchAllIncomesCtrl,
  fetchOneIncomeCtrl,
  updateIncomeCtrl,
  deleteIncomeCtrl
} from "../../controllers/income/incomeCtrl.js";

const incomeRoute = Express.Router();
incomeRoute.post("/", createIncomeCtrl);
incomeRoute.get("/", fetchAllIncomesCtrl);
incomeRoute.get("/:id", fetchOneIncomeCtrl);
incomeRoute.put("/:id", updateIncomeCtrl);
incomeRoute.delete("/:id", deleteIncomeCtrl);

export default incomeRoute;
