//import expressa

const express = require("express")

//routy
const trainRoutes = require("./api/routes/trains")


//instancja expressa
const app = express()

//zmienne srodowiesko
require("dotenv").config()

//polaczenie z baza danych
const mongoose = require("mongoose")
//mongoose.connect("mongodb+srv://"+process.env.DB_USERNAME+":<"+process.env.DB_PASSOWRD+">@cluster0.9tjyx6t.mongodb.net/"+process.env.DB_NAME+"?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://"+process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@cluster0.9tjyx6t.mongodb.net/"+process.env.DB_NAME+"?retryWrites=true&w=majority")

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