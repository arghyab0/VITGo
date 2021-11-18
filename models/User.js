const mongoose = require("mongoose");

//schema
const UserSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, required: true },
    userStatus: { type: String, default: "IN" },
  },
  { timestamps: true },
  { collection: "users" }
);

module.exports = mongoose.model("User", UserSchema);
