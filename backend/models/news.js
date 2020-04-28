const mongoose = require("mongoose");
var conn = mongoose.createConnection(
  "mongodb+srv://andrewtheproger:OjRozl6riBCuNjoV@cluster0-oujqx.mongodb.net/news",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const news = new mongoose.Schema({
  head: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
module.exports = conn.model("News", news);
