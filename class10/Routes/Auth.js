import express from "express"
import { LoginController, refershTokenController, SignupController } from "../Controller/Auth.Controller.js"
import { body } from "express-validator"

const AuthRoutes = express.Router()

AuthRoutes.post('/signup', [
    body('email').isEmail(), body('password').notEmpty(), body('phone').optional().isMobilePhone()

], SignupController)
AuthRoutes.post('/login', LoginController)
AuthRoutes.post('/refershToken', refershTokenController)

export {
    AuthRoutes
}

