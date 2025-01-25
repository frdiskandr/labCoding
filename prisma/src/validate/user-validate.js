import Joi from 'joi'

const registerUserValidate = Joi.object({
    username : Joi.string().min(3).max(100).required(),
    password : Joi.string().min(3).max(100).required(),
    name : Joi.string().min(3).max(100).required(),
})

export {registerUserValidate}