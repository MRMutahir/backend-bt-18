import { configDotenv } from "dotenv";
import express from "express";
import mongoose, { Mongoose } from "mongoose";
import { UserRouter } from "./Routes/User.js";
configDotenv();

const app = express();
async function main() {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Successfully connected to the MongoDB server!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

app.use(express.json());

app.get("/", (req, res) => res.send("Ok"));

app.use("/v1/users", UserRouter);

app.listen(3000, () => {
  main();
  console.log("server start");
});
