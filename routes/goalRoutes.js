import express from "express";
import { viewGoals } from "../controllers/goalController.js";
import { validate } from "../common/validation.js";
import { body } from "express-validator";
const goalRouter = express.Router();
const userValidationRules = () => {
  return [body("user_id").notEmpty().withMessage("User Id is required")];
};
goalRouter.post(
  "/viewGoals",
  userValidationRules(),
  validate,
  (req, res) => {
    viewGoals(req, res);
  }
);


export default goalRouter;
