//imports
const router = require("express").Router();

//model
const User = require("../models/User");
const Request = require("../models/Request");

//middleware
const authMiddleware = require("../middleware/authMiddleware");

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
    res.status(500).json(`Error: ${err.message}!`);
  }
});

//get all requests
router.get("/", async (req, res) => {
  const uid = req.query.uid;
  try {
    let requests = [];
    if (uid) {
      requests = await Request.find({ issuedBy: uid }); //same as -> requests = await Request.find({username: username})
    } else {
      requests = await Request.find();
    }

    requests.sort((a, b) =>
      a.createdAt > b.createdAt ? -1 : b.createdAt > a.createdAt ? 1 : 0
    );

    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json(`Error: ${err.message}!`);
  }
});

//get one request
router.get("/:id", async (req, res) => {
  try {
    const request = await Request.findById(req.params.id);
    res.status(200).json(request);
  } catch (err) {
    res.status(500).json(`Error: ${err.message}!`);
  }
});

//accept/reject request (manager)
router.put("/manager/:id", async (req, res) => {
  //if user is a hostel manager
  if (req.body.userType === "MANAGER") {
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
          res.status(500).json(`Error: ${err.message}!`);
        }
      } else {
        res
          .status(500)
          .json(
            "Error: Student is blacklisted. Un-blacklist before accepting outing request."
          );
      }
    } catch (err) {
      res.status(500).json(`Error: ${err.message}!`);
    }
  } else {
    res
      .status(500)
      .json("Error: You are not authorized to perform this action!");
  }
});

//checkin/checkout request (security)
router.put("/security", async (req, res) => {
  //if user is a security personnel
  if (req.body.userType === "SECURITY") {
    try {
      const issuer = await User.findOne({ userID: req.body.userID }); //find doc id of student

      try {
        let updatedStatus = { req: null, user: null, flag: false };

        //get the request that matches doc id & token
        const request = await Request.findOne({
          issuedBy: issuer._id.toHexString(),
          token: Number(req.body.token),
        });

        //checks depending on the outing status
        if (request.requestStatus === "RAISED")
          res
            .status(500)
            .json(
              "Error: Outing request is not approved by the hostel manager yet."
            );
        if (request.requestStatus === "REJECTED")
          res.status(500).json("Error: Outing request has been rejected.");
        if (request.requestStatus === "COMPLETED")
          res.status(500).json("Error: Outing request is already completed.");

        if (request.requestStatus === "APPROVED") {
          updatedStatus.flag = true;
          updatedStatus.req = "ONGOING";
          updatedStatus.user = "OUT";
        }
        if (request.requestStatus === "ONGOING") {
          updatedStatus.flag = true;
          updatedStatus.req = "COMPLETED";
          updatedStatus.user = "IN";
        }

        if (updatedStatus.flag) {
          try {
            //change request status
            const updatedRequest = await Request.findByIdAndUpdate(
              request._id,
              {
                requestStatus: updatedStatus?.req,
              },
              { new: true }
            );

            //change student status
            const updatedUser = await User.findByIdAndUpdate(
              issuer._id,
              {
                userStatus: updatedStatus?.user,
              },
              { new: true }
            );

            res.status(200).json(updatedRequest);
          } catch (err) {
            res.status(500).json(`Error: ${err.message}!`);
          }
        }
      } catch (err) {
        res.status(500).json("Error: Reg. number - token combo is incorrect.");
      }
    } catch (err) {
      res.status(500).json("Error: Student is not registered.");
    }
  } else {
    res
      .status(500)
      .json("Error: You are not authorized to perform this action.");
  }
});

module.exports = router;
