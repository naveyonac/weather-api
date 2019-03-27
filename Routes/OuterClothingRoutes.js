const express = require('express')
const router = express.Router()
const OuterClothingController = require('./../Controller/OuterClothingController')

router.get('/show', OuterClothingController.index)


module.exports = router