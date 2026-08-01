import express from "express"
import { LoginController, SignupController } from "../Controller/Auth.Controller.js"

const AuthRoutes = express.Router()

AuthRoutes.post('/signup', SignupController)
AuthRoutes.post('/login', LoginController)

export {
    AuthRoutes
}

