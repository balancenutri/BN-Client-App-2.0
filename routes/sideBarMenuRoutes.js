import express from "express";
import { sideBarMenu } from "../controllers/sideBarMenuController.js";
const sideBarMenuController = express.Router();

sideBarMenuController.post('/sideBarMenu', (req, res) => {
    sideBarMenu(req, res);
});


export default sideBarMenuController;
