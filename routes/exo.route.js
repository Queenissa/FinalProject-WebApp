const express  = require('express')
const router = express.Router()

const {
    exoPage
} = require('../controllers/exo.controller')

router.get('/exo', exoPage)


module.exports = router;