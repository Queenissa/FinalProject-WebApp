const express =  require('express')
const router = express.Router()

const {
    homepage, userLogin, userRegister,  
    getBlackPink,getBts,getTwice,getExo,getRedVelvet,getMomoland, getAdminIndex//categories
} = require('../controllers/homepage.controller')


router.get('/', homepage);
router.post('/welcomeUser', userRegister);
router.post('/welcome', userLogin);
router.get('/welcome', getAdminIndex);
//routes every categories
router.get('/blackpink', getBlackPink);
router.get('/bts',getBts);
router.get('/twice',getTwice);
router.get('/exo',getExo);
router.get('/redvelvet',getRedVelvet);
router.get('/momoland',getMomoland)

module.exports = router;

