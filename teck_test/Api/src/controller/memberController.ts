import { Request, Response } from "express";
import Prisma from "../app/database";

async function getAllMembers(req: Request, res: Response) {
  const result = await Prisma.member.findMany();
  res.json(result);
}

export default { getAllMembers };