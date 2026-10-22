const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports = app;
