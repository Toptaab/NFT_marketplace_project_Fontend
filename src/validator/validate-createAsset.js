import Joi from "joi";
import validate from "../utils/validate";

const createAssetSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "name  is required",
    "any.required": "name  is required",
  }),
  collectionId: Joi.any().required().messages({
    "string.empty": "Please Select Collection",
    "any.required": "Please Select Collection",
  }),
});


const validateCreateAsset = (input) =>
  validate(createAssetSchema)(input);
export default validateCreateAsset;
