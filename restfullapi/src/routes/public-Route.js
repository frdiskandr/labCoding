import { Router } from "express";
import Controller from "../controller/userController.js";

const publicRoute = Router();

publicRoute.get("/", (req, res) => {
    res.json({ message: "Hello World" });
});

publicRoute.get('/user', Controller.user);

publicRoute.post('/user',Controller.createUser);
publicRoute.get('/user/:id',Controller.getUserById);
publicRoute.put('/user/:id',Controller.updateUserById);
publicRoute.delete('/user/:id', Controller.deleteUserById);

export default publicRoute;