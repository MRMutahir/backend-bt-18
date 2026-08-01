import express from "express"
import { SignupController } from "../Controller/Auth.Controller.js"

const AuthRoutes = express.Router()

AuthRoutes.post('/signup', SignupController)
AuthRoutes.post('/login', Login)

export {
    AuthRoutes
}

