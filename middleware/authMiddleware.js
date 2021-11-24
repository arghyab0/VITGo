//imports
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const jwttoken = req.header("x-auth-token");

  !jwttoken && res.status(400).json("Error: User is not authorized!");

  try {
    const decoded = jwt.verify(jwttoken, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(500).send("Error: Invalid authorization token!");
  }
};

module.exports = authMiddleware;
