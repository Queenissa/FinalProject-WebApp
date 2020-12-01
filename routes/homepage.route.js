const express =  require('express')
const router = express.Router()

const {
    homepage, userRgistration, userLogin, userRegister, userSignin,
    getBlackPink,getBts,getTwice,getExo,getRedVelvet,getMomoland //categories
} = require('../controllers/homepage.controller')


router.get('/', homepage);
router.get('/register', userRgistration);
router.get('/login', userLogin)
router.post('/register', userRegister);
router.post('/login', userSignin);
//routes every categories
router.get('/blackpink', getBlackPink);
router.get('/bts',getBts);
router.get('/twice',getTwice);
router.get('/exo',getExo);
router.get('/redvelvet',getRedVelvet);
router.get('/momoland',getMomoland)

module.exports = router;

