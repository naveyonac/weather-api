const mongoose = require('./../models/clothingModel')
const clothing = mongoose.model('clothingModel')

module.exports = {
    index: (req, res) => {
        clothing.find({}).then(result => {
            res.json(result)
        })
    },
    create: (req, res) => {
        clothing.create({
            purpose: req.body.purpose,
            type: req.body.type,
            brand: req.body.brand,
            color: req.body.color,
            condition: req.body.condition
        }).then(newitem => {
            console.log(newitem)
        })
    }

}