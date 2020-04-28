const mongoose = require("mongoose");
var conn = mongoose.createConnection(
  "mongodb+srv://andrewtheproger:OjRozl6riBCuNjoV@cluster0-oujqx.mongodb.net/tests",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const test = new mongoose.Schema({
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
module.exports = conn.model("Test", test);
