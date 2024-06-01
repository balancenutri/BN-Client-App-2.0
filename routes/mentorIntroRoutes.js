import express from "express";
import { getChatData,meetYourMentor,mentorMessage,whatWeAnalyse,fastingWindow,eKitList } from "../controllers/mentorIntroController.js";
import { validate } from "../common/validation.js";
import { body } from "express-validator";
const mentorIntroRouter = express.Router();
const userValidationRules = () => {
    return [
      body('user_id').notEmpty().withMessage('User Id is required'),
    ];
};
mentorIntroRouter.post('/getChatData',  userValidationRules(), validate,(req, res) => {
    getChatData(req, res);
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

mentorIntroRouter.post('/eKitList',  userValidationRules(), validate,(req, res) => {
    eKitList(req, res);
});
export default mentorIntroRouter;
