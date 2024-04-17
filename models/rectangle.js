const mongoose = require("mongoose")
const rectangleSchema = mongoose.Schema({
    width: {
        type: Number,
        min: [1, 'width must at least be 1'],
        max: 100000000
    },
    height: {
        type: Number,
        min: [1, 'width must at least be 1'],
        max: 100000000
    }
})
module.exports = mongoose.model("rectangle",
    rectangleSchema)