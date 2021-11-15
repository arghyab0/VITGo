//imports
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

//login route
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ userID: req.body.userID });
    !user && res.status(400).json("User ID not present!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Incorrect credentials!");

    const jwttoken = jwt.sign(
      {
        userID: user.userID,
        displayName: user.displayName,
      },
      "randomverydifficultstring"
    );

    const { password, ...rest } = user._doc;
    res.status(200).json({ ...rest, jwttoken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
