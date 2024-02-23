import Joi from "joi";
import validate from "../utils/validate";

const createCollectionSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "name  is required",
    "any.required": "name  is required",
  }),
  description: Joi.any(),
  categoryId: Joi.any().required().messages({
    "string.empty": "Please Select Category",
    "any.required": "Please Select Category",
  }),
  price: Joi.number().required().messages({
    "string.empty": "Please Insert Price",
    "any.required": "Please Insert Price",
  }),
  chainId: Joi.any().required().messages({
    "string.empty": "Please Select Chain",
    "any.required": "Please Select Chain",
  }),
});


const validateCreateCollection = (input) =>
  validate(createCollectionSchema)(input);
export default validateCreateCollection;
