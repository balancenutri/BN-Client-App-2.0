import express from "express";
import { body } from "express-validator";
import {
  homeScreen,
  notificationList,
} from "../controllers/homeScreenController.js";
const homeScreenRouter = express.Router();
import { validate } from "../common/validation.js";

const userValidationRules = () => {
  return [body("user_id").notEmpty().withMessage("User Id is required")];
};

homeScreenRouter.post(
  "/homeScreen",
  userValidationRules(),
  validate,
  (req, res) => {
    homeScreen(req, res);
  }
);

homeScreenRouter.post(
  "/notificationList",
  userValidationRules(),
  validate,
  (req, res) => {
    notificationList(req, res);
  }
);

export default homeScreenRouter;