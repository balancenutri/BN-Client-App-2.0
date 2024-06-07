import express from "express";
import { body } from "express-validator";
import {
    inchTrackerList,
  photoTrackerList,
  weightTrackerList
} from "../controllers/trackerController.js";
const trackerRouter = express.Router();
import { validate } from "../common/validation.js";

const userValidationRules = () => {
  return [body("user_id").notEmpty().withMessage("User Id is required")];
};

trackerRouter.post(
  "/weightTrackerList",
  userValidationRules(),
  validate,
  (req, res) => {
    weightTrackerList(req, res);
  }
);

trackerRouter.post(
  "/inchTrackerList",
  userValidationRules(),
  validate,
  (req, res) => {
    inchTrackerList(req, res);
  }
);

trackerRouter.post(
  "/photoTrackerList",
  userValidationRules(),
  validate,
  (req, res) => {
    photoTrackerList(req, res);
  }
);

export default trackerRouter;
