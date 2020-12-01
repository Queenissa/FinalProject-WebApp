const express = require("express")
const router = express.Router()

const {
    momolandPage
} = require('../controllers/momoland.controller')

router.get('/twice',momolandPage)

module.exports = router;