const express = require("express")
const router = express.Router()

const {
    twicePage 
} = require ('../controllers/twice.controller')

router.get('/twice',twicePage)

module.exports = router;