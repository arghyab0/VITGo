//imports
const router = require("express").Router();

//model
const User = require("../models/User");
const Request = require("../models/Request");

//create a new request
router.post("/", async (req, res) => {
  const randToken = Math.floor(1000 + Math.random() * 9000);

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

//get all requests
router.get("/", async (req, res) => {
  const uid = req.query.uid;
  try {
    let requests;
    if (uid) {
      requests = await Request.find({ issuedBy: uid }); //same as -> requests = await Request.find({username: username})
    } else {
      requests = await Request.find();
    }

    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get one request
router.get("/:id", async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    res.status(200).json(request);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
