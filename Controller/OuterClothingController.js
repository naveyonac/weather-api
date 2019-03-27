const mongoose = require('./../models/clothingModel')
const clothing = mongoose.model('clothingModel')

module.exports = {
    index: (req, res) => {
        clothing.find().then(response => {
            res.json(response)
            console.log(response)
        })
    }
}