import express from "express";
import userController from "../controller/userController.js";

const publicRoute = express.Router();

publicRoute.post("/api/register", userController.register);
publicRoute.post("/api/login", userController.login);

publicRoute.get("/api/register", (req, res) => {
  res.status(200).json({ message: "ini register" });
});
publicRoute.get("/", (req, res) => {
  res.status(200).json({ message: "hello world" });
});

export { publicRoute };
