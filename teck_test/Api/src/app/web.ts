import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import cors from "cors";
import setupSwager from './swagger';
import UserRouter from '../routes/userRoutes';
import BookRouter from '../routes/bookRouter';
import MemberRouter from '../routes/memberRouter';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// setup swager
setupSwager(app);

//routes
app.use(UserRouter);

app.use("/books", BookRouter)
app.use("/member", MemberRouter)


export default app;