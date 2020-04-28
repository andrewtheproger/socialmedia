const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const jsonParser  = express.json()
const Test = require("./models/test");

const News = require("./models/news");

const Timetable = require("./models/timetable")

const Homework = require("./models/homework");
app.use(cors());

async function start() {
  try { 
    
    app.get("/", function (req, res) {
      res.json({ works: "true" });
    });
    
    app.get("/tests", function (req, res) {
      res.json(await Test.find());
    });
    app.post("/tests", jsonParser, function (req, res) {
      let inf = new Test(req.body)
      await inf.save()
    });
    app.get("/news/:id", function (req, res) {
      res.json(await Test.findById(req.params.id));
    });
    app.get("/news", function (req, res) {
      res.json(await News.find());
    });
    app.post("/news", jsonParser, function (req, res) {
      let inf = new News({body: req.body, status: false})
      await inf.save()
    });
    
    app.get("/homework", function (req, res) {
      res.json(await Homework.find());
    });
    app.post("/homework", function (req, res) {
      let inf = new Homework(req.body)
      await inf.save()
    });
    app.get("/timetable", function (req, res) {
      res.json(await Timetable.find());
    });
    app.listen(80, ()=> console.log("it is ok"));
  } catch (e) {
    console.log(e);
  }
}
start();
