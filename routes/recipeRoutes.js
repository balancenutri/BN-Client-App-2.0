import express from "express";
import {
    deleteChapter,
    getRecipeBookChapters,
    getRecipeDetails,
    recipeList,
} from "../controllers/recipeController.js";
import { validate } from "../common/validation.js";
import { body } from "express-validator";
const recipeRouter = express.Router();
const userValidationRules = () => {
  return [body("user_id").notEmpty().withMessage("User Id is required")];
};
recipeRouter.post(
  "/getRecipeBookChapters",
  userValidationRules(),
  validate,
  (req, res) => {
    getRecipeBookChapters(req, res);
  }
);

recipeRouter.post(
  "/recipeList",
  userValidationRules(),
  validate,
  (req, res) => {
    recipeList(req, res);
  }
);

recipeRouter.post(
  "/getRecipeDetails",
  userValidationRules(),
  validate,
  (req, res) => {
    getRecipeDetails(req, res);
  }
);

recipeRouter.post(
  "/deleteChapter",
  userValidationRules(),
  validate,
  (req, res) => {
    deleteChapter(req, res);
  }
);


export default recipeRouter;
