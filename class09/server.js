import { configDotenv } from "dotenv";
configDotenv()
import express from "express";
import { connectDB } from "./config/db.js";
import { User } from "./Model/Users.Model.js";
import jwt from "jsonwebtoken"

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


app.post('/auth/signup', async (req, res) => {
    const { email, password } = req.body

    const isEmail = await User.findOne(email)
    if (isEmail) {
        res.send(409).send("This user allready exist")
    }
    const userCreated = await User.insertOne({
        email, password
    })

    if (userCreated) {
        res.status(201).send("user created successfully")
    }

})


app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body

    const isEmail = await User.findOne({ email })

    if (!isEmail) {
        return res.status(409).send("User not found")
    }

    console.log("isEmail >>", isEmail)

    const accessToken = jwt.sign({
        email: isEmail.email,
        _id: isEmail._id
    },
        "HUDSHDAIDAKDNJAHDJADJA",
        {
            expiresIn: "1m"
        }
    )

    return res.status(200).json({
        message: "login successfully",
        accessToken
    })
})


app.post("/users/userinfo", async (req, res) => {

    const { authorization } = req.headers

    console.log(authorization)
    if (!authorization) {
        return res.status(404).send("token missing")
    }


    jwt.verify(authorization, "HUDSHDAIDAKDNJAHDJADJA",  async (err, decode) => {
        if (err) {
            return res.status(403).send("JWT Verification Failed")
        }

        const email = decode.email

        const getUser = await User.findOne({
            email
        })

        res.status(200).json({
            data: getUser
        })
    })
})

// app.post("/users/notification", async (req, res) => {

//     const { email, password } = req.body


//     const isEmail = await User.findOne({
//         email
//     })
//     if (!isEmail) {
//         return res.status(404).json({
//             message: "user not found"
//         })
//     }


//     Notification.findOne({
//         email
//     })
//     res.status(200).json({
//         data: isEmail
//     })
// })


// app.post("/users/post", async (req, res) => {

//     const { email, password } = req.body


//     const isEmail = await User.findOne({
//         email
//     })
//     if (!isEmail) {
//         return res.status(404).json({
//             message: "user not found"
//         })
//     }


//     Notification.findOne({
//         email
//     })
//     res.status(200).json({
//         data: isEmail
//     })
// })



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});