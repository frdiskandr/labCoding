// import { Request, RequestHandler, Response} from 'express';
// import Logger from "../app/logger";
// import Services from "../services/bookServices";


// const getAllBooks: RequestHandler = async (req: Request, res: Response) => {
//   try {
//     const response = await Services.GetAllBooks();
//     res.status(200).json(response);
//     return
//   }catch (error) {
//     Logger.error(error);
//   }
// }

// const addBook: RequestHandler = async (req: Request, res: Response) => {
//   try {
//     const response = await Services.AddBook(req.body);
//     res.status(200).json(response);
//     return
//   }catch (error) {
//     Logger.error(error);
//   }
// }

// export default { getAllBooks, addBook };


import { Request, RequestHandler, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllBooks = async (req: Request, res: Response) => {
  const books = await prisma.book.findMany();
  res.json(books);
};

export const borrowBook = async (req: Request, res: Response) => {
  const { memberId, bookId } = req.body;

  const member = await prisma.member.findUnique({
    where: { id: memberId },
    include: { borrowed: true, penalties: true },
  });

  if (!member) return res.status(404).json({ error: "Member not found" });

  if (member.borrowed.length >= 2) {
    return res.status(400).json({ error: "Member cannot borrow more than 2 books" });
  }

  if (member.penalties.length > 0) {
    return res.status(400).json({ error: "Member is penalized and cannot borrow books" });
  }

  const book = await prisma.book.findUnique({ where: { id: bookId } });

  if (!book || book.stock <= 0) {
    return res.status(400).json({ error: "Book is not available" });
  }

  await prisma.book.update({
    where: { id: bookId },
    data: { stock: book.stock - 1 },
  });

  const borrow = await prisma.borrow.create({
    data: { memberId, bookId },
  });

  res.json(borrow);
};

export const returnBook = async (req: Request, res: Response) => {
  const { memberId, bookId } = req.body;

  const borrow = await prisma.borrow.findFirst({
    where: { memberId, bookId, returnDate: null },
  });

  if (!borrow) return res.status(400).json({ error: "No active borrow found" });

  const returnDate = new Date();
  const borrowDate = new Date(borrow.borrowDate);
  const daysBorrowed = Math.ceil((returnDate.getTime() - borrowDate.getTime()) / (1000 * 60 * 60 * 24));

  await prisma.borrow.update({
    where: { id: borrow.id },
    data: { returnDate },
  });

  await prisma.book.update({
    where: { id: bookId },
    data: { stock: { increment: 1 } },
  });

  if (daysBorrowed > 7) {
    await prisma.penalty.create({
      data: {
        memberId,
        startDate: returnDate,
        endDate: new Date(returnDate.getTime() + 3 * 24 * 60 * 60 * 1000),
      },
    });
  }

  res.json({ message: "Book returned successfully" });
};
