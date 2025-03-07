import { PrismaClient } from "@prisma/client";
import Validate from "../validate/validate";
import bookSchema  from "../validate/schema/bookSchema";

const prisma = new PrismaClient();

async function GetAllBooks() {
  return await prisma.book.findMany();
}

async function AddBook(req: any) {
  const data = await Validate(bookSchema, req);

  return await prisma.book.create({
    data: {
      code: data.code,
      title: data.title,
      author: data.author,
      stock: data.stock
    }
  })
}


export default {
  GetAllBooks,
  AddBook
}