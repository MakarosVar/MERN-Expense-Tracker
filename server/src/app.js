import express from "express";
import DBconnection from "./config/DBconnection.js";
import signUpUser from "./controllers/users/userCtrl.js";

const app = express();
DBconnection();

app.post("/signup", (req, res) => {
    res.json({ user: "admin" });
  });
export default app;
