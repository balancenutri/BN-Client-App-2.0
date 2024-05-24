import express from "express";
import { assessmentList } from "../controllers/assessmentController.js";
const assessmentRouter = express.Router();

assessmentRouter.post('/assessmentList', (req, res) => {
    assessmentList(req, res);
});
export default assessmentRouter;
