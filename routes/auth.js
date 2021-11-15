//imports
const router = require("express").Router();
const bcrypt = require("bcrypt");

//model
const User = require("../models/User");

//register route
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      userID: req.body.userID,
      displayName: req.body.displayName,
      email: req.body.email,
      password: hashedPassword,
      userType: req.body.userType,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
