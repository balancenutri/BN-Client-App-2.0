import express from "express";
import { assessmentList,personalDetails,nutritionLifestyleAnalysis,twentyFourHourDietRecall } from "../controllers/assessmentController.js";
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
export default assessmentRouter;
