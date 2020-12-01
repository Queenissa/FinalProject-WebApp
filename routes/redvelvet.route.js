const express = require("express")
const router = express.Router()

const {
    redvelvetPage
} = require('../controllers/redvelvet.controller')

router.get('/redvelvet',redvelvetPage)

module.exports = router;