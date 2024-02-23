import Joi from "joi";
import validate from "../utils/validate";

const settingSchema = Joi.object({
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

const validateSetting = (input) => validate(settingSchema)(input);
export default validateSetting;
