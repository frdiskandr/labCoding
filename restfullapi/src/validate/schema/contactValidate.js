import Joi from "joi";

const contact = Joi.object({
    userId: Joi.number().required(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().optional(),
});

const updateContact = Joi.object({
    userId: Joi.number().optional(),
    name: Joi.string().optional(),
    phone: Joi.string().optional(),
    address: Joi.string().optional(),
});

export default { contact, updateContact };
