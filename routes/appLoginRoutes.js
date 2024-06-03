import express from "express";
import { body } from "express-validator";
import { forceAppUpdate,termsAndConditions,emailLogin,forgotPassword,sendOtp,verifyOtp,setPassword } from "../controllers/loginController.js";
const loginRouter = express.Router();
import { validate } from "../common/validation.js";

const userValidationRules = () => {
    return [
      body('user_id').notEmpty().withMessage('User Id is required'),
    ];
};

loginRouter.post('/forceAppUpdate',(req, res) => {
    forceAppUpdate(req, res);
});

loginRouter.post('/termsAndConditions', userValidationRules(), validate,(req, res) => {
    termsAndConditions(req, res);
});

loginRouter.post('/emailLogin',(req, res) => {
    emailLogin(req, res);
});

loginRouter.post('/forgotPassword', userValidationRules(), validate,(req, res) => {
    forgotPassword(req, res);
});

loginRouter.post('/sendOtp', (req, res) => {
    sendOtp(req, res);
});

loginRouter.post('/verifyOtp', userValidationRules(), validate,(req, res) => {
    verifyOtp(req, res);
});

loginRouter.post('/setPassword', userValidationRules(), validate,(req, res) => {
    setPassword(req, res);
});

export default loginRouter;
