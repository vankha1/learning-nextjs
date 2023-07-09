import mongoose from "mongoose";

const { Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type : 'string',
        unique: true,
        required: true
    },
    email:{
        type : 'string',
        unique: true,
        required: true
    },
    password:{
        type : 'string',
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.models.User || mongoose.model("User", userSchema);