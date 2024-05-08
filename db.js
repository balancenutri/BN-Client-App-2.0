import mongoose from "mongoose";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// MongoDB database configuration
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("MongoDB URI is missing in the environment variables.");
  process.exit(1); // Exit with failure code
}

// export const mongooseConnection = mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log("Connected to MongoDB!");
// })
// .catch((err) => {
//   console.error("Error connecting to MongoDB:", err);
//   process.exit(1); // Exit with failure code
// });

// MySQL database configuration
export const mysqlConnection = mysql.createConnection({
  host: "balancenutritiononline.com",
  user: "balancei_admin",
  password: "JHa2jejD1P",
  database: "balancei_nutweb",
});

// mysqlConnection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL database:", err);
//     process.exit(1); // Exit with failure code
//   }
//   console.log("Connected to MySQL database!");
// });
