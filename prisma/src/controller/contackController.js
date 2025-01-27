import contactService from "../services/contactService.js";
import { prisma } from "../app/database.js";

const create = async (req, res, next) => {
    try{
        const token = req.get("Authorization").toString();

        const {username} = await prisma.user.findFirst({
            where: {
                token: token
            },
            select: {
                username: true
            }
        })

        const result = await contactService.create(username, req);
        res.status(200).json({ data: result, message: "Contact created" });
    }catch(err){
        next(err);
    }
}

const getById = async (req, res, next) => {
    try{
        const token = req.get("Authorization").toString();
        const contactId = Number(req.params.id);

        const {username} = await prisma.user.findFirst({
            where: {
                token: token,
            },
            select: {
                username:true,
            }
        })

        const result = await contactService.getContactById(username, contactId);
        res.status(200).json({ data: result });
    }catch(err){
        next(err);
    }
}

const get = async (req, res, next) => {
    try{
        const {username} = await prisma.user.findFirst({
            where: {
                token: req.get("Authorization").toString(),
            },
            select: {
                username: true,
            }
        })

        const result = await contactService.getContact(username);
        res.status(200).json({ data: result });
    }catch(err){
        next(err);
    }
}

const serchContack = async (req, res, next) => {
    try{
        const {username} = await prisma.user.findFirst({
            where: {
                token: req.get("Authorization").toString(),
            },
            select: {
                username: true,
            }
        })

        const result = await contactService.serchContact(username, req);
        res.status(200).json({ data: result });
    }catch(err){
        next(err);
    }
}

export default { create,get,getById, serchContack }