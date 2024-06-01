import express from "express";
import { iclList,naturalSpices,snacks,cereals,glossary,noteToMentor } from "../controllers/iclController.js";
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

iclRouter.post('/naturalSpices',  userValidationRules(), validate,(req, res) => {
    naturalSpices(req, res);
});

iclRouter.post('/snacks',  userValidationRules(), validate,(req, res) => {
    snacks(req, res);
});

iclRouter.post('/cereals',  userValidationRules(), validate,(req, res) => {
    cereals(req, res);
});

iclRouter.post('/glossary',  userValidationRules(), validate,(req, res) => {
    glossary(req, res);
});

iclRouter.post('/noteToMentor',  userValidationRules(), validate,(req, res) => {
    noteToMentor(req, res);
});
export default iclRouter;
