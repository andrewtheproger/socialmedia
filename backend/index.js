const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Test = require("models/test")
app.use(cors());

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://andrewtheproger:OjRozl6riBCuNjoV@cluster0-oujqx.mongodb.net/test?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
    app.get("/", function (req, res) {
      res.json({ works: "true" });
    });
    app.get("/", function (req, res) {
      res.json({ works: "true" });
    });
    app.listen(80);
  } catch (e) {
    console.log(e);
  }
}
start();
