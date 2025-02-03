import { Router } from "express";
import Controller from "../controller/contactController.js";

const contactRoute = Router();

contactRoute.get('/contact/:id', Controller.getContactByUserId)
contactRoute.post('/contact', Controller.createContact)
contactRoute.put('/contact/:id', Controller.updateContact)
contactRoute.delete('/contact/:id', Controller.deleteContact)

export default contactRoute