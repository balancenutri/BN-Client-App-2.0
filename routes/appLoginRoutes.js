import express from "express";
import { body,validationResult } from "express-validator";
import { forceAppUpdate,termsAndConditions,emailLogin,forgotPassword,sendOtp,verifyOtp,setPassword } from "../controllers/loginController.js";
const loginRouter = express.Router();

loginRouter.post('/forceAppUpdate', [
    body('user_id').notEmpty().withMessage('User Id is required'),
    // body('username').isString().notEmpty().withMessage('Username is required'),
    // body('email').isEmail().withMessage('Invalid email address'),
    // body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    forceAppUpdate(req, res);
});

loginRouter.post('/termsAndConditions', [
    body('user_id').notEmpty().withMessage('User Id is required'),
],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    termsAndConditions(req, res);
});

loginRouter.post('/emailLogin', [
    body('user_id').notEmpty().withMessage('User Id is required'),
],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    emailLogin(req, res);
});

loginRouter.post('/forgotPassword', [
    body('user_id').notEmpty().withMessage('User Id is required'),
],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    forgotPassword(req, res);
});

loginRouter.post('/sendOtp', [
    body('user_id').notEmpty().withMessage('User Id is required'),
],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    sendOtp(req, res);
});

loginRouter.post('/verifyOtp', [
    body('user_id').notEmpty().withMessage('User Id is required'),
],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    verifyOtp(req, res);
});

loginRouter.post('/setPassword', [
    body('user_id').notEmpty().withMessage('User Id is required'),
],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    setPassword(req, res);
});

export default loginRouter;
