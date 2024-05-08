// Import required modules
import express from "express";
import userRouter from "./routes/authRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
import { mysqlConnection } from "./db.js";

// Initialize Express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config();
app.use(cors());
app.use("/routes", userRouter);

// Start the server
const PORT = process.env.PORT || 3000;

// Connect to MySQL
mysqlConnection.connect((mysqlErr) => {
  if (mysqlErr) {
    console.error("Error connecting to MySQL database:", mysqlErr);
    return;
  }
  console.log("Connected to MySQL database!");

});
// Connect to MongoDB
// mongooseConnection.connect((mongoErr) => {
//   if (mongoErr) {
//     console.error("Error connecting to MongoDB:", mongoErr);
//     return;
//   }
//   console.log("Connected to MongoDB!");
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
