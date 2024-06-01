import express from "express";
import { programDetails,programValidity,messageByKhyati } from "../controllers/programIntroController.js";
import { validate } from "../common/validation.js";
import { body } from "express-validator";
const programIntroRouter = express.Router();
const userValidationRules = () => {
    return [
      body('user_id').notEmpty().withMessage('User Id is required'),
    ];
};
programIntroRouter.post('/programDetails',  userValidationRules(), validate,(req, res) => {
    programDetails(req, res);
});

programIntroRouter.post('/programValidity',  userValidationRules(), validate,(req, res) => {
    programValidity(req, res);
});

programIntroRouter.post('/messageByKhyati',  userValidationRules(), validate,(req, res) => {
    messageByKhyati(req, res);
});

// programIntroRouter.post('/messageByKhyati',  userValidationRules(), validate,(req, res) => {
//     messageByKhyati(req, res);
// });

export default programIntroRouter;
