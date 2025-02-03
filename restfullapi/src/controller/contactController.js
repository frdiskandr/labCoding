import service from "../services/contactService.js";

const createContact = async (req, res, next) => {
    try {
        const result = await service.createContact(req);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const getContactByUserId = async (req, res, next) => {
    try {
        const { id } = req.params;        
        const result = await service.getContactByUserId(id, req);
        res.status(200).json(result);        
    } catch (err) {
        next(err);
    }   
    }

const updateContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await service.updateContact(id, req);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const deleteContact = async (req, res, next) => {
    try {
        const { id } = req.params;        
        const result = await service.deleteContact(id, req);
        res.status(200).json(result);        
    } catch (err) {
        next(err);
    }   
    }

export default { createContact, getContactByUserId, updateContact, deleteContact };