import { accessToken } from "../config/jwt.js"
import { comparePassword, passwordHash } from "../helper/helper.js"
import { User } from "../Model/Users.Model.js"
import jwt from "jsonwebtoken"


export const SignupController = async (req, res) => {
    try {
        let { email, password } = req.body
        const getUser = await User.findOne({
            email
        })
        if (getUser) return res.status(409).send("This email is allready exist")

        if (email && password) {
            let pwd = await passwordHash(password)

            await User.insertOne({
                email: email,
                password: pwd
            })
            return res.status(201).send("create user successfully")
        } else {
            res.status(400).send("Bad req")
        }
    } catch (error) {

    }
}


export const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body


        if (!email || !password) {
            return res.status(400).send("Bad req")
        }

        const getUser = await User.findOne({
            email
        })

        if (!getUser) {
            return res.status(404).send("user not found")
        }

        const checkPassword = await comparePassword(password, getUser.password)

        if (checkPassword) {

            const token = await accessToken({
                _id: getUser._id,
                email: getUser.email
            })

            return res.json({
                accessToken: token
            }).status(200)

        } else {
            return res.status(200).json({
                message: "Invalid email and password"
            })
        }

    } catch (error) {
        console.log("error >>>", error)

    }
}


