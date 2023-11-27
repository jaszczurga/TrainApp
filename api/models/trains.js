const mongoose = require("mongoose")

//schemat pociagu
const trainSchema = mongoose.Schema({
    name: String,
    from: String,
    to: String
})

module.exports = mongoose.model("Train",trainSchema)