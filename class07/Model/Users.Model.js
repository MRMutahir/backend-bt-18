import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model("users", UsersSchema)

export {
    User
}