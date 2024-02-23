import Joi from "joi";
import validate from "../utils/validate";

const loginSchema = Joi.object({
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
        "password must be at least 6 ",
      "any.required": "password is required",
    }),
});

const validateLogin = (input) => validate(loginSchema)(input);
export default validateLogin;
