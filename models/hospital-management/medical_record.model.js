import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({}, {timestamps: true, versionKey: false})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)