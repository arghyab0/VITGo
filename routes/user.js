//imports
const router = require("express").Router();

//model
const User = require("../models/User");

//get user details
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, jwttoken, ...rest } = user._doc;

    res.status(200).json(rest);
  } catch (err) {
    res.status(500).json(err);
  }
});

//blacklist students (manager)
router.put("/blacklist/:id", async (req, res) => {
  //if user is a hostel manager
  if (req.body.userType === "Manager") {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          userStatus: "BLACKLIST",
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(500).json("You are authorized to perform this action.");
  }
});

//unblacklist students (manager)
router.put("/unblacklist/:id", async (req, res) => {
  //if user is a hostel manager
  if (req.body.userType === "Manager") {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          userStatus: "IN",
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(500).json("You are authorized to perform this action.");
  }
});

module.exports = router;
