import { passwordHash } from "../helper/helper.js"
import { User } from "../Model/Users.Model.js"




export const SignupController = async (req, res) => {
    let { email, password } = req.body

    if (email && password) {
        let pwd = await passwordHash(password)
        console.log(pwd)

        try {
            await User.insertOne({
                email: email,
                password: pwd
            })

        } catch (error) {
            console.error("internel server error", error)
        }

        res.status(201).send("create user successfully")

    } else {
        res.status(400).send("Bad req")
    }

}



export const Login = async (req, res) => {
    const { email, password } = req.body

    const getUser = await User.findOne({
        email
    })

    if (getUser) {
        res.send("user login")
    }else{
        res
    }

}