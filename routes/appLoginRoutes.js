import express from "express";
import { forceAppUpdate,termsAndConditions,emailLogin,forgotPassword } from "../controllers/loginController.js";
const router = express.Router();

router.post('/forceAppUpdate', (req, res) => {
    forceAppUpdate(req, res);
});

router.post('/termsAndConditions', (req, res) => {
    termsAndConditions(req, res);
});

router.post('/emailLogin', (req, res) => {
    emailLogin(req, res);
});

router.post('/forgotPassword', (req, res) => {
    forgotPassword(req, res);
});

router.post('/sendOtp', (req, res) => {
    forgotPassword(req, res);
});

export default router;
