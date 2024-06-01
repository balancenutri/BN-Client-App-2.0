import express from "express";
import { iclList,iclCategory,noteToMentor } from "../controllers/iclController.js";
import { validate } from "../common/validation.js";
import { body } from "express-validator";
const iclRouter = express.Router();
const userValidationRules = () => {
    return [
      body('user_id').notEmpty().withMessage('User Id is required'),
    ];
};
iclRouter.post('/iclList',  userValidationRules(), validate,(req, res) => {
    iclList(req, res);
});

iclRouter.post('/iclCategory',  userValidationRules(), validate,(req, res) => {
    iclCategory(req, res);
});

iclRouter.post('/noteToMentor',  userValidationRules(), validate,(req, res) => {
    noteToMentor(req, res);
});
export default iclRouter;
