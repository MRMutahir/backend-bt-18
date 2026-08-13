// import { accessToken } from "../config/jwt.js"
import { validationResult } from "express-validator";
import { comparePassword, passwordHash } from "../helper/helper.js"
import { User } from "../Model/Users.Model.js"
import jwt from "jsonwebtoken"


export const SignupController = async (req, res) => {
    try {

        const result = validationResult(req);
        console.log("result >>>", result)
        return

        if (!result.isEmpty()) {
            console.log(result)
            // handle validation errors
            // return res.send('Please fix the request');
        }

        return
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
            const payload = {
                email: getUser.email,
                _id: getUser._id
            }
            const secretKey = process.env.JWT;


            const accessToken = jwt.sign(payload, secretKey, { expiresIn: '1m' })
            const refreshToken = jwt.sign(payload, secretKey, { expiresIn: '30d' })

            res.cookie('token', refreshToken, { httpOnly: true, secure: true, });
            return res.status(200).json({ message: "login successfully", accessToken });

        } else {
            return res.status(200).json({
                message: "Invalid email and password"
            })
        }

    } catch (error) {
        console.log("error >>>", error)

    }
}





export const refershTokenController = async (req, res) => {
    const token = req.cookies.token;
    jwt.verify(token, process.env.JWT, (err, decodedPayload) => {
        if (err) {
            console.log("errr >>", err)
            return res.status(403).json({ message: 'Invalid or expired token.' });
        }
        console.log(decodedPayload)
        const accessToken = jwt.sign({
            email: decodedPayload.email,
            _id: decodedPayload._id
        }, process.env.JWT, { expiresIn: '1m' })


        return res.status(200).json({
            accessToken
        })
    });
}