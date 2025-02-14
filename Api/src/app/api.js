import express from "express";
import ErrorMiddleware from "../middleware/ErrorMiddleware.js";
import PublicRoute from "../routes/publickRoute.js";
import UserRoute from "../routes/userRoute.js";

// initial app
const app = express();
app.use(express.json());

// routes public
app.use(PublicRoute);
app.use('/user', UserRoute);

// error middleware
app.use(ErrorMiddleware);

export default app;