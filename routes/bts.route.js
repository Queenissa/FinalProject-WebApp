const express  = require('express')
const router = express.Router()

const {
    btsPage
} = require('../controllers/bts.controller')

router.get('/bts', btsPage)


module.exports = router;