const mongoose = require("mongoose");

//schema
const RequestSchema = new mongoose.Schema(
  {
    issuedBy: { type: String, required: true },
    requestStatus: { type: String, required: true, default: "RAISED" },
    token: { type: Number, required: true },
    checkoutAt: { type: Date, required: true },
    checkinAt: { type: Date },
  },
  { timestamps: true },
  { collection: "requests" }
);

module.exports = mongoose.model("Request", RequestSchema);
