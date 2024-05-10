import express from "express";
import { forceAppUpdate,termsAndConditions,emailLogin } from "../controllers/loginController.js";
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

export default router;
