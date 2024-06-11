import express from "express";
import { body } from "express-validator";
import {
  programCheckout
} from "../controllers/checkoutController.js";
const checkoutRouter = express.Router();
import { validate } from "../common/validation.js";

const userValidationRules = () => {
  return [body("user_id").notEmpty().withMessage("User Id is required")];
};

checkoutRouter.post(
  "/programCheckout",
  userValidationRules(),
  validate,
  (req, res) => {
    programCheckout(req, res);
  }
);


export default checkoutRouter;

