const express  = require('express')
const router = express.Router()

const {
    blinkPage
} = require('../controllers/blackpink.controller')

router.get('/blackpink', blinkPage)


module.exports = router;