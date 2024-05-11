import express from "express";
import router from "./routes/appLoginRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
import { mysqlConnection } from "./db.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/bnClientApp', router);

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
