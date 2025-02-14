import { Router } from "express";
import Controller from "../controller/publicRoute.js";

const PublicRoute = Router();

PublicRoute.get("/", Controller.get);

export default PublicRoute;