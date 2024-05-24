import express from "express";
import { programDetails } from "../controllers/assessmentController.js";
const assessmentRouter = express.Router();

assessmentRouter.post('/assessmentList', (req, res) => {
    assessmentList(req, res);
});
export default assessmentRouter;
