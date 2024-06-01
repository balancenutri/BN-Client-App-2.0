import express from "express";
import { sideBarMenu } from "../controllers/sideBarMenuController.js";
import { validate } from "../common/validation.js";
import { body } from "express-validator";
const sideBarMenuController = express.Router();
const userValidationRules = () => {
    return [
      body('user_id').notEmpty().withMessage('User Id is required'),
    ];
};
sideBarMenuController.post('/sideBarMenu',  userValidationRules(), validate,(req, res) => {
    sideBarMenu(req, res);
});


export default sideBarMenuController;