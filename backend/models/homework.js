const mongoose = require("mongoose");
var conn = mongoose.createConnection(
  "mongodb+srv://andrewtheproger:OjRozl6riBCuNjoV@cluster0-oujqx.mongodb.net/homework",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const homework = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  inf: {
    type: String,
    required: true,
  },
});
module.exports = conn.model("Homework", homework);