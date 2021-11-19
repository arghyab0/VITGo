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

//accept/reject request (manager)
router.put("/:id", async (req, res) => {
  //if user is a hostel manager
  if (req.body.userType === "Manager") {
    try {
      const request = await Request.findById(req.params.id);
      const issuer = await User.findById(request.issuedBy);

      if (issuer.userStatus === "IN") {
        try {
          const updatedRequest = await Request.findByIdAndUpdate(
            req.params.id,
            {
              requestStatus: req.body.requestStatus,
            },
            { new: true }
          );

          res.status(200).json(updatedRequest);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res
          .status(500)
          .json(
            "Student is blacklisted. Un-blacklist before accepting outing request."
          );
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(500).json("You are authorized to perform this action.");
  }
});

//checkin/checkout request (security)
router.put("/security", async (req, res) => {
  //if user is a security personnel
  if (req.body.userType === "Security") {
    try {
      const issuer = await User.findOne({ userID: req.body.userID }); //find doc id of student

      try {
        let newStatus;

        //get the request that matches doc id & token
        const request = await Request.findOne({
          issuedBy: String(issuer._id),
          token: req.body.token,
        });

        //checks depending on the outing status
        if (request.requestStatus === "APPROVED") newStatus = "ONGOING";
        if (request.requestStatus === "ONGOING") newStatus = "COMPLETED";
        if (request.requestStatus === "REJECTED")
          res.status(500).json("Outing request has been rejected.");
        if (request.requestStatus === "COMPLETED")
          res.status(500).json("Outing request is already completed.");

        try {
          const updatedRequest = await Request.findByIdAndUpdate(
            request._id,
            {
              requestStatus: newStatus,
            },
            { new: true }
          );
          res.status(200).json(updatedRequest);
        } catch (err) {
          res.status(500).json(err);
        }
      } catch (err) {
        res.status(500).json("User-token combo is incorrect.");
      }
    } catch (err) {
      res.status(500).json("User is not regsitered.");
    }
  } else {
    res.status(500).json("You are authorized to perform this action.");
  }
});

module.exports = router;
