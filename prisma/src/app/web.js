import express from "express";
import { publicRoute } from "../route/public-route.js";
import { errorMiddleware } from "../middleware/error-midleware.js";
import authRoute from "../route/authRoute.js";

const app = express();
app.use(express.json());

app.use(publicRoute);
app.use(authRoute)
app.use(errorMiddleware);

export default app;
