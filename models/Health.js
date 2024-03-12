const mongoose = require("mongoose");

const HealthSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    state: {
      type: String,
    },
    localGovernmentArea: {
      type: String,
    },
    street: {
      type: String,
    },
    date: {
      type: Date,
    },
    time: {
      type: String,
    },
    reportDetails: {
      type: String,
    },
    previousOccurence: {
      type: Boolean,
      // enum: ["Yes", "No"],
    },
    details: {
      type: String,
    },
    age: { type: Number },
    sex: { type: String },
    image: {
      type: String,
    },
    emergencyResponse: {
      type: Boolean,
      default: false,
    },
    emergencyResponseNeeded: {
      type: Boolean,
      default: false,
    },
    reportersDetails: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Health", HealthSchema);
