import express from "express";
import { forceAppUpdate } from "../controllers/loginController.js";
const router = express.Router();

router.post('/forceAppUpdate', (req, res) => {
    forceAppUpdate(req, res);
});
export default router;
