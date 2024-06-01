import express from "express";
import { chatWithMentor,meetYourMentor,mentorMessage,whatWeAnalyse,fastingWindow,eKit } from "../controllers/mentorIntroController.js";
import { validate } from "../common/validation.js";
import { body } from "express-validator";
const mentorIntroRouter = express.Router();
const userValidationRules = () => {
    return [
      body('user_id').notEmpty().withMessage('User Id is required'),
    ];
};
mentorIntroRouter.post('/chatWithMentor',  userValidationRules(), validate,(req, res) => {
    chatWithMentor(req, res);
});

mentorIntroRouter.post('/meetYourMentor',  userValidationRules(), validate,(req, res) => {
    meetYourMentor(req, res);
});

mentorIntroRouter.post('/mentorMessage',  userValidationRules(), validate,(req, res) => {
    mentorMessage(req, res);
});

mentorIntroRouter.post('/whatWeAnalyse',  userValidationRules(), validate,(req, res) => {
    whatWeAnalyse(req, res);
});

mentorIntroRouter.post('/fastingWindow',  userValidationRules(), validate,(req, res) => {
    fastingWindow(req, res);
});

mentorIntroRouter.post('/eKit',  userValidationRules(), validate,(req, res) => {
    eKit(req, res);
});
export default mentorIntroRouter;
