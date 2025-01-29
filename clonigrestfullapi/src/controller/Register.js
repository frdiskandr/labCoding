import ServiceRegister from "../services/register.js";

const Register = async (req, res, next) => {
    try{
        const result = await ServiceRegister(req.body);
        res.status(200).json({
            data: result,
            message: "success"
        })
    }catch(error){
        next(error);
    }
}

export default Register;