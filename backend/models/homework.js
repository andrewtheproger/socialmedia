const mongoose = require("mongoose");
var conn = mongoose.createConnection(
  "mongodb+srv://andrewtheproger:OjRozl6riBCuNjoV@cluster0-oujqx.mongodb.net/homework",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const homework = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  body: [String]
});
module.exports = conn.model("Homework", homework);