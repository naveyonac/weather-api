const express = require('express')
const router = express.Router()

router.get('/show', (req, res) => {
    res.json('Blue hoodie')
})

module.exports = router