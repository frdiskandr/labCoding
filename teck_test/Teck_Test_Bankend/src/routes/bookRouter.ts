import express from "express";
import Controller from "../controller/bookController";


const BookRouter = express.Router();

BookRouter.get("/", Controller.getAllBooks);
BookRouter.post("/add", Controller.addBook);
BookRouter.post("/borrow", Controller.borrowBook);
BookRouter.post("/return", Controller.returnBook);

export default BookRouter;