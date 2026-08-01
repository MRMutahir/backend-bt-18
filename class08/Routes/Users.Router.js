import express from "express"
import { userInfoController } from "../Controller/User.Controller"

const UsersRoutes = express.Router()

UsersRoutes.get("/me", userInfoController)

// UsersRoutes.get("/update", updateUserInfoController)

// UsersRoutes.get("/delete", deleteUserInfoController)


export { UsersRoutes }