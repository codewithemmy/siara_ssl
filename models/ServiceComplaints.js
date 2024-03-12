const mongoose = require("mongoose");

const ServiceComplaintsSchema = new mongoose.Schema(
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
    serviceDescription: {
      type: String,
    },
    narrateComplaints: {
      type: String,
    },
    serviceProvider: {
      type: String,
    },
    agreementServiceActivation: { type: String },
    evidenceOfService: { type: String },
    feedback: {
      type: String,
    },
    reportersDetails: {
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

module.exports = mongoose.model("ServiceComplaints", ServiceComplaintsSchema);
