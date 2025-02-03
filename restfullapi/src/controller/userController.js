import service from "../services/userServices.js";
import logger from "../app/logger.js";

const createUser = async (req, res, next) => {
    try {
        const result = await service.createUser(req);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const user = async (req, res, next) => {
    try {
        const result = await service.getUser(req);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        logger.warn(typeof id);
        const result = await service.getUserById(id, req);
        return res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};

const updateUserById = async (req, res, next) => {
    try{
        const { id } = req.params;
        const result = await service.updateUser(id, req);
        return res.status(200).json(result);
    }catch(err){
        next(err);
    }
}

const deleteUserById = async (req, res, next) => {
    try{
        const { id } = req.params;
        const result = await service.deleteUserById(id);
        return res.status(200).json(result);
    }catch(err){
        next(err);
    }
}


export default { getUserById, createUser, updateUserById, deleteUserById, user };
