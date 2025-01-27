import service from "../services/userService.js";

const register = async (req, res, next) => {
    try {
        const result = await service.Register(req);
        res.status(200).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const login = async (req, res, next) => {
    try {
        const result = await service.Login(req);
        res.status(200).json({ data: result });
    } catch (err) {
        next(err);
    }
};

const getUser = async (req, res, next) => {
    try {
        const result = await service.getUser(req);
        res.status(200).json({ data: result });
    } catch (err) {
        next(err);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const result = await service.updateUser(req);
        res.status(200).json({ data: result });
    } catch (err) {
        next(err);
    }
};

const logOut = async (req, res, next) => {
    try {
        const result = await service.logOut(req);
        res.status(200).json({ data: result });
    } catch (err) {
        next(err);
    }
};
export default { register, login, getUser, updateUser, logOut };
