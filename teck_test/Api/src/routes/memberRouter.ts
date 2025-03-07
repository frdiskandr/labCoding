import { Router } from "express";
import Controller from "../controller/memberController";

const MemberRouter = Router();

MemberRouter.get("/", Controller.getAllMembers);

export default MemberRouter