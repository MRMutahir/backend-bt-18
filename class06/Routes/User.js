import express from "express";
import { createUser, getAllUsers, getUserById } from "../Controller/Users.js";

const UserRouter = express.Router();

UserRouter.post("/", createUser);

UserRouter.get("/", getAllUsers);

UserRouter.get("/:id", getUserById);

// UserRouter.put("/:id", getUserUpdate);

// UserRouter.delete("/:id", deleteUserById);

export { UserRouter };
