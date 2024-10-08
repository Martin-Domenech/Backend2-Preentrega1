import mongoose from "mongoose";
import { createHash } from "../utils.js";

const userCollection = "Users";

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: { type: String, unique: true },
    age: Number,
    password: String,
    cart: { type: Boolean, default: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
})

const firstCollection = mongoose.model(userCollection, userSchema);

export default firstCollection

