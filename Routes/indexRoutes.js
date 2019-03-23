const express = require('express')
const router = express.Router()

router.use('/clothing', require('./clothingRoutes'))

module.exports = router