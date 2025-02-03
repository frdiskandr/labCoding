import Joi from "joi";

const User = Joi.object({
    fullname : Joi.string().optional(),
    email : Joi.string().email().required(),
    password : Joi.string().required(),
})

const updateUser = Joi.object({
    fullname : Joi.string().optional(),
    email : Joi.string().email().optional(),
    password : Joi.string().optional(),
})

const Contact = Joi.object({
    userId : Joi.number().required(),
    name : Joi.string().required(),
    phone : Joi.string().required(),
    address : Joi.string().optional(),
})

export default {User, Contact, updateUser};