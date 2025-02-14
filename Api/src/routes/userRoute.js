import { Router } from "express";
import Controller from "../controller/userController.js";
import AuthMiddleware from "../middleware/authMiddleware.js";

const UserRoute = Router();

UserRoute.get("/", (req, res) => {
    res.status(200).json({ message: "User Route" });
})
UserRoute.post("/register", Controller.register);
UserRoute.post("/login", Controller.login);

UserRoute.use(AuthMiddleware);
UserRoute.get("/profile/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: "User Profile", id });
})

export default UserRoute;