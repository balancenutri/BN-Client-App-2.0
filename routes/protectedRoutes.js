import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
const protectedRouter = express.Router();
protectedRouter.get("/", verifyToken, (req, res) => {
  res
    .status(200)
    .json({ message: "Protected route accessed", userId: req.body.userId });
});
export default protectedRouter;
