// // Import required modules
import express from "express";
import userRouter from "./routes/authRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
import { mysqlConnection } from "./db.js";

const app = express();
dotenv.config();
app.use(cors());
// Start the server
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Connect to MySQL
mysqlConnection.connect((mysqlErr) => {
  if (mysqlErr) {
    console.error("Error connecting to MySQL database:", mysqlErr);
    return;
  }
  console.log("Connected to MySQL database!");

});
// // Connect to MongoDB
// // mongooseConnection.connect((mongoErr) => {
// //   if (mongoErr) {
// //     console.error("Error connecting to MongoDB:", mongoErr);
// //     return;
// //   }
// //   console.log("Connected to MongoDB!");
// // });

app.get('/hello', (req, res) => { return res.send("Hello BN") })



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

