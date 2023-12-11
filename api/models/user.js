const mongoose = require("mongoose")

//schemat usera
const userSchema = mongoose.Schema({
    username : String,
    password : String,
})

module.exports = mongoose.model("User",userSchema)