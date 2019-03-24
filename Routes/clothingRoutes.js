const express = require('express')
const router = express.Router()
const clothingController = require('./../Controller/clothingController')

router.get('/show', clothingController.index)
router.post('/', clothingController.create)

module.exports = router