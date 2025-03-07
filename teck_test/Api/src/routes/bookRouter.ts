import express from "express";
import { borrowBook, getAllBooks, returnBook } from "../controller/bookController";

const BookRouter = express.Router();

BookRouter.get("/", getAllBooks);
// BookRouter.post("/add", addB);
BookRouter.post("/borrow", borrowBook);
BookRouter.post("/return", returnBook);


export default BookRouter