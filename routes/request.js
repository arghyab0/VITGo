//imports
const router = require("express").Router();

//model
const User = require("../models/User");
const Request = require("../models/Request");

//create a new request
router.post("/", async (req, res) => {
  const randToken = Math.round(Math.random() * 10000);

  try {
    const newRequest = new Request({
      issuedBy: req.body.issuedBy,
      contactNo: req.body.contactNo,
      requestStatus: "RAISED",
      token: randToken,
    });

    const request = await newRequest.save();
    res.status(200).json(request);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
