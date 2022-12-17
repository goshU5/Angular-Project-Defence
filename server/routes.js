const router = require('express').Router();
const authController = require('./controllers/auth')
const carController = require('./controllers/car');

router.get('/', (req, res) => {
    res.json('Works')
})
router.use('/cars', carController)
router.use(authController)
    
module.exports = router;