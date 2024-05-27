import express from "express";
import { forceAppUpdate,termsAndConditions,emailLogin,forgotPassword,sendOtp,verifyOtp } from "../controllers/loginController.js";
const loginRouter = express.Router();

loginRouter.post('/forceAppUpdate', (req, res) => {
    forceAppUpdate(req, res);
});

loginRouter.post('/termsAndConditions', (req, res) => {
    termsAndConditions(req, res);
});

loginRouter.post('/emailLogin', (req, res) => {
    emailLogin(req, res);
});

loginRouter.post('/forgotPassword', (req, res) => {
    forgotPassword(req, res);
});

loginRouter.post('/sendOtp', (req, res) => {
    sendOtp(req, res);
});

loginRouter.post('/verifyOtp', (req, res) => {
    verifyOtp(req, res);
});

export default loginRouter;
