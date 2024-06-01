import express from "express";
import { dietList,dietDetails } from "../controllers/dietSectionController.js";
import { validate } from "../common/validation.js";
import { body } from "express-validator";
const dietSectionRouter = express.Router();
const userValidationRules = () => {
    return [
      body('user_id').notEmpty().withMessage('User Id is required'),
    ];
};
dietSectionRouter.post('/dietList',  userValidationRules(), validate,(req, res) => {
    dietList(req, res);
});

dietSectionRouter.post('/dietDetails',  userValidationRules(), validate,(req, res) => {
    dietDetails(req, res);
});
export default dietSectionRouter;
