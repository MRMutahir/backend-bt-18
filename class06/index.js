import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import mongoose, { Mongoose } from "mongoose";
import { UserRouter } from "./Routes/User.js";
import rateLimit from "express-rate-limit"

const app = express();
async function main() {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Successfully connected to the MongoDB server!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}


app.get("/", (req, res) => res.send("Ok"));

app.use(express.json());
app.use(rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes window
  limit: 10, // Limit each IP to 100 requests per window
  message: 'Too many requests from this IP, please try again later.', // Custom response text
  statusCode: 429, // HTTP status code for "Too Many Requests" (default is 429)
  standardHeaders: 'draft-8', // Return standard rate limit info in headers
  legacyHeaders: false, // Disable the deprecated X-RateLimit-* headers
}))

app.use("/v1/users", UserRouter);




app.listen(3004, () => {
  main();
  console.log("server start");
});
