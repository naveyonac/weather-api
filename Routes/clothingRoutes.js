const express = require('express')
const router = express.Router()
const clothingController = require('./../Controller/clothingController')
// const OuterClothingController = require('./../Controller/OuterClothingController')

router.get('/show', clothingController.index)
router.get('/outer', require('./OuterClothingRoutes'))
router.post('/', clothingController.create)

module.exports = router