const express = require('express');
const { route } = require('./auth');
const router = express.Router();
const auth = require('../middleware/verifyToken');
const ubicacionRoute = require('./ubicaciones');

router.use('/ubicaciones', ubicacionRoute);

router.get('/', auth, (req,res) =>{
    res.json({
        message: 'The Application Programming Interface Root'
    });
});

module.exports = router;