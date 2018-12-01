const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connecting mLab MongoDB 🔌
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Simple get request (for testing ONLY)
app.get("/", (req, res) => res.send("Hello"));

// 🔥 up the server port 1024
const port = process.env.PORT || 1024;
app.listen(port, () => console.log(`Server running on port ${port}`));