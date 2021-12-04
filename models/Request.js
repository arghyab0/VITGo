const mongoose = require("mongoose");

//schema
const RequestSchema = new mongoose.Schema(
  {
    issuedBy: { type: String, required: true },
    issuedByRegNo: { type: String, required: true },
    contactNo: { type: String, required: true },
    parentsContactNo: { type: String, required: true },
    hours: { type: Number, required: true },
    purpose: { type: String, required: true },
    requestStatus: { type: String, required: true },
    token: { type: Number, required: true },
    managerAt: { type: Date },
    checkoutAt: { type: Date },
    checkinAt: { type: Date },
  },
  { timestamps: true },
  { collection: "requests" }
);

module.exports = mongoose.model("Request", RequestSchema);
