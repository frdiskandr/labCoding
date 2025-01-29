import express from 'express';
import ErrMiddleware from '../middleware/ErrorMiddleware.js';
import PublicRoute from '../routes/publicRoute.js';
import middleware from '../middleware/middleware.js';

const Web = express();
Web.use(express.json());
Web.use(middleware);

Web.use(PublicRoute);


Web.use(ErrMiddleware);

export default Web;