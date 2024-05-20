import express from "express";
import { programDetails } from "../controllers/programIntroController.js";
const router = express.Router();

router.post('/programDetails', (req, res) => {
    programDetails(req, res);
});



export default router;
