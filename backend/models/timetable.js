const mongoose = require("mongoose");
var conn = mongoose.createConnection(
  "mongodb+srv://andrewtheproger:OjRozl6riBCuNjoV@cluster0-oujqx.mongodb.net/timetable",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const timetable = new mongoose.Schema({
  monday: [String],
  tuesday: [String],
  wednesday: [String],
  thursday: [String],
  friday: [String],
  saturday: [String],
});
module.exports = conn.model("Timetable", timetable);
