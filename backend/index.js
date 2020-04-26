const express = require("express")
const app = express()
const cors = require("cors")
app.get("/", function(req, res){
    res.json({works: "true"})
})
app.listen(80)