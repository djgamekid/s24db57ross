const mongoose = require("mongoose")
const rectangleSchema = mongoose.Schema({
    width: Number,
    height: Number
    
})
module.exports = mongoose.model("rectangle",
    rectangleSchema)