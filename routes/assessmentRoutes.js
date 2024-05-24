import express from "express";
import { assessmentList,personalDetails,nutritionLifestyleAnalysis,twentyFourHourDietRecall,foodFrequency } from "../controllers/assessmentController.js";
const assessmentRouter = express.Router();

assessmentRouter.post('/assessmentList', (req, res) => {
    assessmentList(req, res);
});

assessmentRouter.post('/personalDetails', (req, res) => {
    personalDetails(req, res);
});

assessmentRouter.post('/nutritionLifestyleAnalysis', (req, res) => {
    nutritionLifestyleAnalysis(req, res);
});

assessmentRouter.post('/twentyFourHourDietRecall', (req, res) => {
    twentyFourHourDietRecall(req, res);
});

assessmentRouter.post('/foodFrequency', (req, res) => {
    foodFrequency(req, res);
});
export default assessmentRouter;
