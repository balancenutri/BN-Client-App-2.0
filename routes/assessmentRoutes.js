import express from "express";
import { assessmentList,personalDetails } from "../controllers/assessmentController.js";
const assessmentRouter = express.Router();

assessmentRouter.post('/assessmentList', (req, res) => {
    assessmentList(req, res);
});

assessmentRouter.post('/personalDetails', (req, res) => {
    personalDetails(req, res);
});

export default assessmentRouter;
