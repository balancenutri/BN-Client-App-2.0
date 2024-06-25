import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToMongoDB, mysqlConnection } from "./db.js";
import bodyParser from "body-parser";
// =================================================================
// -----------------------------Importing Routes---------------------------------
// =================================================================
import loginRouter from "./routes/appLoginRoutes.js";
import programIntroRouter from "./routes/programIntroRoutes.js";
import sideBarMenuRouter from "./routes/sideBarMenuRoutes.js";
import assessmentRouter from "./routes/assessmentRoutes.js";
import iclRouter from "./routes/iclRoutes.js";
import mentorIntroRouter from "./routes/mentorIntroRoutes.js";
import dietSectionRouter from "./routes/dietSectionRoutes.js";
import healthScoreRouter from "./routes/healthScoreRoutes.js";
import homeScreenRouter from "./routes/homeScreenRoutes.js";
import goalRouter from "./routes/goalRoutes.js";
import recipeRouter from "./routes/recipeRoutes.js";
import trackerRouter from "./routes/trackerRoutes.js";
import checkoutRouter from "./routes/checkoutRoutes.js";
import protectedRouter from "./routes/protectedRoutes.js";
// =================================================================

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(express.json());

// =================================================================
// -----------------------------Routes Starts---------------------------------
// =================================================================
app.use("/bnClientApp/loginApp", loginRouter);
app.use("/bnClientApp/protected", protectedRouter);
app.use("/bnClientApp/programIntro", programIntroRouter);
app.use("/bnClientApp/sideBarMenu", sideBarMenuRouter);
app.use("/bnClientApp/assessment", assessmentRouter);
app.use("/bnClientApp/icl", iclRouter);
app.use("/bnClientApp/mentorIntro", mentorIntroRouter);
app.use("/bnClientApp/dietSection", dietSectionRouter);
app.use("/bnClientApp/healthScore", healthScoreRouter);
app.use("/bnClientApp/clientHomeScreen", homeScreenRouter);
app.use("/bnClientApp/goal", goalRouter);
app.use("/bnClientApp/recipe", recipeRouter);
app.use("/bnClientApp/tracker", trackerRouter);
app.use("/bnClientApp/tracker", trackerRouter);
app.use("/bnClientApp/checkout", checkoutRouter);
// =================================================================

const PORT = process.env.PORT || 3000;

// =================================================================
// -----------------------------MYSQL Connection---------------------------------
// =================================================================
mysqlConnection.connect(async (mysqlErr) => {
  if (mysqlErr) {
    console.error("Error connecting to MySQL database:", mysqlErr);
    process.exit(1); // Exit the process if unable to connect
  }
  console.log("Connected to MySQL database!");

  try {
    await connectToMongoDB();
    console.log("Connected to MongoDB!");
    // Start the server after successful database connection
    const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    // Handle server errors
    server.on("error", (err) => {
      console.error("Server error:", err);
    });
  } catch (mongoErr) {
    console.error("Error connecting to MongoDB:", mongoErr);
    process.exit(1); // Exit with failure code
  }
});
// =================================================================

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Default route
app.get("/bnClientApp", (req, res) => {
  res.send("Welcome to Balance Nutrition!");
});

export default app;
