import { configDotenv } from "dotenv";
configDotenv()
import express from "express";
import { connectDB } from "./config/db.js";
import { AuthRoutes  } from "./Routes/Auth.js";
import { UsersRoutes } from "./Routes/Users.Router.js";


// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Server is running",
    });
});

app.use('/v1', AuthRoutes)
app.use('/v1/users', UsersRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});