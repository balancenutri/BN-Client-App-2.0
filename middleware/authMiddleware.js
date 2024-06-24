import jwt from "jsonwebtoken";
import { secret } from "../config/config.js";

export default function verifyToken(req, res, next) {
  const authHeader = req.header("Authorization");
  if (!authHeader) return res.status(401).json({ error: "Access denied" });

  const token = authHeader.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    // Only log in debug mode to avoid exposing sensitive information
    if (process.env.NODE_ENV === "development") {
      console.log("Token received:", token);
      console.log("Secret used for verification:", secret);
    }

    const decoded = jwt.verify(token, secret);

    if (process.env.NODE_ENV === "development") {
      console.log("Decoded token:", decoded);
    }
console.log(decoded)
    // Attach userId to the request object
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    res.status(401).json({ error: "Invalid token" });
  }
}
