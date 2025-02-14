import Service from "../services/userService.js";

const get = async (req, res, next) => {
    try{
        res.status(200).json({ message: "Wellcome To User Route /user/login To login and /user/register To register" });
    }catch(e){
        next(e);
    }
}

const register = async (req, res, next) => {
    try{
        const result = await Service.RegisterUser(req.body);
        res.status(200).json(result);
    }catch(e){
        next(e);
    }
}

const login = async (req, res, next) => {
    try{
        const result = await Service.LoginUser(req.body);
        res.status(200).json(result);
    }catch(e){
        next(e);
    }
}

export default { get, register, login };