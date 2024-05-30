import express from "express";
import loginRouter from "./routes/appLoginRoutes.js";
import programIntroRouter from "./routes/programIntroRoutes.js";
import sideBarMenuRouter from "./routes/sideBarMenuRoutes.js";
import assessmentRouter from "./routes/assessmentRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
import { mysqlConnection } from "./db.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/bnClientApp/loginApp', loginRouter);
app.use('/bnClientApp/programIntro', programIntroRouter);
app.use('/bnClientApp/sideBarMenu', sideBarMenuRouter);
app.use('/bnClientApp/assessment', assessmentRouter);


const PORT = process.env.PORT || 3000;

// Connect to MySQL
mysqlConnection.connect((mysqlErr) => {
  if (mysqlErr) {
    console.error("Error connecting to MySQL database:", mysqlErr);
    process.exit(1); // Exit the process if unable to connect
  }
  console.log("Connected to MySQL database!");

  // Start the server after successful database connection
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  // Handle server errors
  server.on('error', (err) => {
    console.error('Server error:', err);
  });
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Default route
app.get('/', (req, res) => {
  res.send("Welcome to Balance Nutrition!");
});

export default app; // Export the app for testing or modular usage
