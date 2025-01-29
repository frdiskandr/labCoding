import express from "express";
import Register from "../controller/Register.js";

const PublicRoute = express.Router();

PublicRoute.post("/", Register);
PublicRoute.get("/", (req, res) =>
  res.status(200).json({ message: "hello world!" })
);

export default PublicRoute;
