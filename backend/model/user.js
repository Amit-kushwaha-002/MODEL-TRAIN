const mongoose = require("mongoose");

// Connect once at app startup (better to do this in index.js, not in each model file)
mongoose.connect("mongodb://127.0.0.1:27017/authtestapp")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// User schema
const userSchema = new mongoose.Schema({
  username:{type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

// Patient schema
const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  age: { type: Number },   // ✅ new field
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  diagnosis: { type: String },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  scanImage: { type: String }
});



const Patient = mongoose.model("Patient", patientSchema);

// Export both models
module.exports = { User, Patient };
