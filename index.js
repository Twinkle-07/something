const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res)=>{
    res.end("hhhhhh")
})
app.post("/home", (req, res)=>{
    res.end("tyl")
})
app.listen(port)