import express from "express";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import { lookup, resolve4 } from 'node:dns/promises';

checkDNS();
const app = express();

async function main() {
  try {
    await mongoose.connect();
    console.log("Successfully connected to the MongoDB server!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}
app.listen(3000, () => {
//   main();
  console.log("server start");
});
