import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    dateOfBirth: String,
    address: String,
    photo: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const postUser = mongoose.model('user', userSchema);

export default postUser;