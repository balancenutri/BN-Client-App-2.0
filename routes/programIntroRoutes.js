import express from "express";
import { programDetails,programValidity,messageByKhyati } from "../controllers/programIntroController.js";
const programIntroRouter = express.Router();

programIntroRouter.post('/programDetails', (req, res) => {
    programDetails(req, res);
});

programIntroRouter.post('/programValidity', (req, res) => {
    programValidity(req, res);
});

programIntroRouter.post('/messageByKhyati', (req, res) => {
    messageByKhyati(req, res);
});

export default programIntroRouter;
