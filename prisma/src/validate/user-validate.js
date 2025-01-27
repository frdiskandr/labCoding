import Joi from "joi";

const registerUserValidate = Joi.object({
  username: Joi.string().min(3).max(100).required(),
  password: Joi.string().min(3).max(100).required(),
  name: Joi.string().min(3).max(100).required(),
});

const loginUserValidate = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const getUserValidate = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().optional(),
  name: Joi.string().optional(),
});

const updateUserValidate = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().optional(),
  name: Joi.string().optional(),
})

export default { 
  registerUserValidate, 
  loginUserValidate,
  getUserValidate,
  updateUserValidate
};
