import mongoose from "mongoose";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// MongoDB database configuration
export const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("MongoDB URI is missing in the environment variables.");
  process.exit(1); // Exit with failure code
}

// Function to connect to MongoDB
export const connectToMongoDB = () => {
  return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// MySQL database configuration
export const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "balancei_admin",
  password: "JHa2jejD1P",
  database: "balancei_nutweb",
});

// export const mysqlConnection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "balancei_local",
// });

// mysqlConnection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL database:", err);
//     process.exit(1); // Exit with failure code
//   }
//   console.log("Connected to MySQL database!");
// });
