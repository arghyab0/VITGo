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

module.exports = router;
