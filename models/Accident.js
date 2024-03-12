const mongoose = require("mongoose");

const AccidentSchema = new mongoose.Schema(
  {
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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Accident", AccidentSchema);
