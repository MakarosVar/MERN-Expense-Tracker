import Express from "express";
import {
  createIncomeCtrl,
  fetchAllIncomesCtrl,
  fetchOneIncomeCtrl,
  updateIncomeCtrl,
  deleteIncomeCtrl
} from "../../controllers/income/incomeCtrl.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const incomeRoute = Express.Router();
incomeRoute.post("/", authMiddleware, createIncomeCtrl);
incomeRoute.get("/", authMiddleware, fetchAllIncomesCtrl);
incomeRoute.get("/:id", authMiddleware, fetchOneIncomeCtrl);
incomeRoute.put("/:id", authMiddleware, updateIncomeCtrl);
incomeRoute.delete("/:id", authMiddleware, deleteIncomeCtrl);

export default incomeRoute;
