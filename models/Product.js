const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
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
    productType: {
      type: String,
    },
    brand: {
      type: String,
    },
    batchModelNumber: {
      type: String,
    },
    complaint: {
      type: String,
    },
    supplierPurchasedShop: {
      type: String,
    },
    dateOfPuchase: {
      type: String,
    },
    expiryDate: {
      type: String,
    },
    image: {
      type: String,
    },
    anonymous: {
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

module.exports = mongoose.model("Product", ProductSchema);
