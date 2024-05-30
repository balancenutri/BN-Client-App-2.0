import express from "express";
import { assessmentList,personalDetails,nutritionLifestyleAnalysis,twentyFourHourDietRecall,foodFrequency,uploadPhoto,getMedicalHistory,attachMedicalReport } from "../controllers/assessmentController.js";
import { validate } from "../common/validation.js";
import { body } from "express-validator";
const assessmentRouter = express.Router();

const userValidationRules = () => {
    return [
      body('user_id').notEmpty().withMessage('User Id is required'),
    ];
};

assessmentRouter.post('/assessmentList', userValidationRules(), validate, (req, res) => {
    assessmentList(req, res);
});

assessmentRouter.post('/personalDetails',  userValidationRules(), validate,(req, res) => {
    personalDetails(req, res);
});

assessmentRouter.post('/nutritionLifestyleAnalysis', userValidationRules(), validate, (req, res) => {
    nutritionLifestyleAnalysis(req, res);
});

assessmentRouter.post('/twentyFourHourDietRecall',  userValidationRules(), validate,(req, res) => {
    twentyFourHourDietRecall(req, res);
});

assessmentRouter.post('/foodFrequency', userValidationRules(), validate, (req, res) => {
    foodFrequency(req, res);
});

assessmentRouter.post('/uploadPhoto', userValidationRules(), validate, (req, res) => {
    uploadPhoto(req, res);
});

assessmentRouter.post('/getMedicalHistory',  userValidationRules(), validate,(req, res) => {
    getMedicalHistory(req, res);
});

assessmentRouter.post('/attachMedicalReport', userValidationRules(), validate, (req, res) => {
    attachMedicalReport(req, res);
});
export default assessmentRouter;
