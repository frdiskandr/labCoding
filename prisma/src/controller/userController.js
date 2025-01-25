import service from '../services/userService.js'

const register = async (req, res, next) => {
    try {
        const result = await service.Register(req)
        res.status(200).json({
            data: result
        })
    }catch(error){
        next(error)
    }
}

export default {register}