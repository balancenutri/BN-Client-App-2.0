import { randomBytes } from "crypto";

// Generate a random 256-bit (32-byte) key
const secretKey = randomBytes(32).toString("hex");

console.log("Generated Secret Key:", secretKey);
