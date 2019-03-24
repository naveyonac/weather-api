const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Clothing = new Schema ({
    purpose: String,
    type: String,
    brand: String, //search what data type a radio button is
    color: String,
    condition: String
})

mongoose.model('clothingModel', Clothing)


module.exports = mongoose