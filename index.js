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

//using routes
app.use("/api/auth", authRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running at port ${port}....`));