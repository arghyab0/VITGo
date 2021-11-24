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
    res.status(200).json({
      ...user,
      message: `User ${user.userID} added successfully.`,
    });
  } catch (err) {
    let errMsg;

    const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

    if (err.index === 0 && err.code === 11000) {
      errMsg = `Error: ${capitalize(Object.keys(err.keyValue)[0])} ${
        Object.values(err.keyValue)[0]
      } already exists!`;
    }

    if (err.name === "ValidationError") {
      errMsg = `Error: ${capitalize(Object.keys(err.errors)[0])} is required!`;
    }

    res.status(500).json(errMsg);
  }
});

//login route
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ userID: req.body.userID });
    !user && res.status(400).json("Error: User ID is not registered!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Error: Incorrect credentials!");

    const jwttoken = jwt.sign(
      {
        _id: user._id,
        userID: user.userID,
        displayName: user.displayName,
        email: user.email,
        userType: user.userType,
        userStatus: user.userStatus,
      },
      process.env.JWT_KEY
    );

    res.status(200).json(jwttoken);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
