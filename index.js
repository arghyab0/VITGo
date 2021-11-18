//init express server
const express = require("express");
const app = express();
app.use(express.json());

//imports
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

//mongoose connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB."))
  .catch((err) => console.log(err));

//routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const requestRoute = require("./routes/request");

//using routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/request", requestRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running at port ${port}....`));
