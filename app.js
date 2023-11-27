//import expressa

const express = require("express")

//routy
const trainRoutes = require("./api/routes/trains")


//instancja expressa
const app = express()

//logger
const morgan = require("morgan")
app.use(morgan("combined"))

//parsowanie body
const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.use("/trains",trainRoutes)
app.use((req,res,next)=>{
    res.status(404).json({wiadomosc:"Wszystko smiga"})
})
//exportuje app
module.exports = app