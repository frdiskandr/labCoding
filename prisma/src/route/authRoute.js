import { Router } from "express";
import authMiddleware from "../middleware/auth-middleware.js";
import controllerUser from "../controller/userController.js";
import controllerContact from "../controller/contackController.js";

const authRoute = Router();

authRoute.use(authMiddleware);
authRoute.get('/user',controllerUser.getUser);
authRoute.put('/user',controllerUser.updateUser);
authRoute.get('/user/logout',controllerUser.logOut);

// contact route
authRoute.post('/contact', controllerContact.create);
authRoute.get('/contact', controllerContact.get);
authRoute.get('/contact/:id', controllerContact.getById);
authRoute.get('/contact/search', controllerContact.serchContack);

export default authRoute;