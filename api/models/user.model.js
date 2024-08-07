import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Invalid field (Name)"],
    },
    email: {
        type: String,
        required: [true, "Invalid field (email)"],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Invalid field (password)'],
    },
    proPic: {
        type: String,
        required: [true, 'Invalid field (photo)'],
    }
    }, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;