const mongoose = require("mongoose");
var conn = mongoose.createConnection(
  "mongodb+srv://andrewtheproger:OjRozl6riBCuNjoV@cluster0-oujqx.mongodb.net/timetable",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const timetable = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  checking: {
    type: String,
    required: true,
  },
});
module.exports = conn.model("Test", timetable);