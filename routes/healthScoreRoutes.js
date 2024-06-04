import express from "express";
import { body } from "express-validator";
import { saveHealthScore } from "../controllers/healthScoreController.js";
const healthScoreRouter = express.Router();
import { validate } from "../common/validation.js";

const userValidationRules = () => {
    return [
      body('user_id').notEmpty().withMessage('User Id is required'),
    ];
};

healthScoreRouter.post('/saveHealthScore', userValidationRules(), validate,(req, res) => {
    saveHealthScore(req, res);
});

export default healthScoreRouter;
