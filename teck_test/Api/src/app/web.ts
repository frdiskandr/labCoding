import express, { Request, Response } from 'express';
import dotenv from "dotenv";
import cors from "cors";
import setupSwager from './swagger';
import UserRouter from '../routes/userRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// setup swager
setupSwager(app);

//routes
app.use(UserRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "hei guyss"
  })
  return;
});


export default app;