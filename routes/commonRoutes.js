import express from "express";
import { body } from "express-validator";
import {
  getRedirectAppScreen
} from "../controllers/commonController.js";
const commonRouter = express.Router();
import { validate } from "../common/validation.js";

const userValidationRules = () => {
  return [body("user_id").notEmpty().withMessage("User Id is required")];
};

commonRouter.post(
  "/getRedirectAppScreen",
  userValidationRules(),
  validate,
  getRedirectAppScreen
);

export default commonRouter;
