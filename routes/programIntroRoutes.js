import express from "express";
import { programDetails } from "../controllers/programIntroController.js";
const programIntroRouter = express.Router();

programIntroRouter.post('/programDetails', (req, res) => {
    programDetails(req, res);
});

export default programIntroRouter;
