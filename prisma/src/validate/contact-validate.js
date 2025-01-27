import Joi from 'joi'

const createContactValidate = Joi.object({
    name : Joi.string().required(),
    number : Joi.string().required()
})

const contackId = Joi.number().required();

const serchContactValidate = Joi.object({
    page: Joi.number().min(1).default(1),
    size: Joi.number().min(1).default(10),
    name: Joi.string().optional(),
    number: Joi.string().optional()
})

export default { createContactValidate, contackId, serchContactValidate}
