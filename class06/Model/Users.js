import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
    minlength: [3, "Username must be at least 3 characters long"],
    lowercase: true,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    lowercase: true,
  },

  age: {
    type: Number,
    min: [10, "Age cannot be negative"],
    max: [100, "Age cannot be greater than 120"],
  },
});

const User = mongoose.model("users", UserSchema);

export { User };
