import Joi from 'joi'
import validate from '../utils/validate'

const registerSchema = Joi.object({
  userName: Joi.string().required().trim().messages({
    "string.empty": "Username is required",
    "any.required": "Username is required",
  }),
  email: Joi.string().required().email({ tlds: false }).messages({
    "string.empty": "email  is required",
    "any.required": "email  is required",
    "string.email": "must be a valid email",
  }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "password is required",
      "string.pattern.base":
        "password must be 6 Alphabet ",
      "any.required": "password is required",
    }),
    confirmPassword: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .messages({
      "string.empty": "confirm password is required",
      "any.only": "password did not match",
      "any.required": "confirm password is required",
    })



})

const validateRegister = (input) => validate(registerSchema)(input);
export default validateRegister;