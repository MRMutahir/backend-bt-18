import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
import mongoose, { Mongoose } from "mongoose";
import { UserRouter } from "./Routes/User.js";
import rateLimit from "express-rate-limit"
import { Schema } from "zod/v3";
import { createUserSchema } from "./Validator/user.schema.js";

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

export const validate = (schema) => (req, res, next) => {
  try {
    // safeParse or parse evaluates the request data against your schema
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    next();
  } catch (error) {
    // Zod returns structured array errors inside error.errors
    console.log(error.issues);


    return res.status(400).json({
      status: false,
      // errors: error.issues[0],
      field: error.issues[0].path[1],
      message: error.issues[0].message
    });
  }
};


app.use("/v1/users", validate(createUserSchema), UserRouter);




app.listen(3004, () => {
  main();
  console.log("server start");
});
