import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagonsedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true,
        enum: ["A", "A+", "A-", "AB", "AB+", "AB-", "B", "B+", "B-", "O", "O+", "O-"],
    },
    gender: {
        type: String,
        required: true,
        enum: ["MALE", "FEMALE", "OTHER"]
    }, 
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, {timestamps: true, versionKey: false})

export const Patient = mongoose.model("Patient", patientSchema)