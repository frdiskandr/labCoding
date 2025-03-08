import { Router } from "express";
import Controller from "../controller/memberController";

const MemberRouter = Router();
MemberRouter.get("/", Controller.getAllMembers);
MemberRouter.post("/add", Controller.addMember);

export default MemberRouter;