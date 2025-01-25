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
        res.status(200).json({ result });
    } catch (err) {
        next(err);
    }
};

export default { register, login };
