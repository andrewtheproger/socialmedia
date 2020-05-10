const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jsonParser = express.json();
const Test = require("./models/test");

const News = require("./models/news");

const Timetable = require("./models/timetable");

const Homework = require("./models/homework");

app.use(cors());

app.get("/", async function (req, res, next) {
  res.json({ works: "true" });
});

app.get("/tests", async function (req, res, next) {
  try {
    res.json(await Test.find());
  } catch (err) {
    console.error(err);
    next();
  }
});
app.post("/tests", jsonParser, async function (req, res, next) {
  try {
    let inf = new Test(req.body);
    await inf.save();
  } catch (err) {
    console.error(err);
    next();
  }
});
app.get("/news/:id", async function (req, res, next) {
  try {
    res.json(await Test.findById(req.params.id));
  } catch (err) {
    console.error(err);
    next();
  }
});
app.get("/news", async function (req, res, next) {
  try {
    res.json(await News.find());
  } catch (err) {
    console.error(err);
    next();
  } 
});
app.post("/news", jsonParser, async function (req, res, next) {
  try {
    let inf = new News({ body: req.body, status: false });
    inf.save();
  } catch (err) {
    console.error(err);
    next();
  }
});

app.get("/homework", async function (req, res, next) {
  try {
    res.json(await Homework.find());
  } catch (err) {
    console.error(err);
    next();
  }
});
app.post("/homework", async function (req, res, next) {
  try {
    let inf = new Homework(req.body);
    inf.save();
  } catch (err) {
    console.error(err);
    next();
  }
});
app.get("/timetable", async function (req, res, next) {
  try {
    res.json(await Timetable.find());
  } catch (err) {
    console.error(err);
    next();
  }
});
app.listen(80, () => console.log("it is ok"));
