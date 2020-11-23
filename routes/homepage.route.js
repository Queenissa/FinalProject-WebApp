const express =  require('express')
const router = express.Router()

const {
    homepage, userRgistration, userLogin, userRegister, userSignin
} = require('../controllers/homepage.controller')


router.get('/', homepage);
router.get('/register', userRgistration);
router.get('/login', userLogin)
router.post('/register', userRegister);
router.post('/login', userSignin)



module.exports = router;
