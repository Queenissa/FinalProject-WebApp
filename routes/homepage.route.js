const express =  require('express')
const router = express.Router()

const {
    homepage, userRgistration, userLogin, userRegister, userSignin,getBlackPink
} = require('../controllers/homepage.controller')


router.get('/', homepage);
router.get('/register', userRgistration);
router.get('/login', userLogin)
router.post('/register', userRegister);
router.post('/login', userSignin);
router.get('/blackpink', getBlackPink);



module.exports = router;
