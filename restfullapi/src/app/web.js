import express from 'express';
import ErrorMiddleware from '../middleware/error-middleware.js';
import publicRoute from '../routes/public-Route.js';
import contactRoute from '../routes/contactRoute.js';

const web = express();
web.use(express.json());

web.use(publicRoute);
web.use(contactRoute);

web.use(ErrorMiddleware);

export default web;