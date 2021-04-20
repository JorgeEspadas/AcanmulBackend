const express = require('express');
const { route } = require('./auth');
const router = express.Router();
const auth = require('../middleware/verifyToken');
const ubicacionRoute = require('./ubicaciones');
const paqueteRoute = require('./paquetes');

router.use('/ubicacion', ubicacionRoute);
router.use('/paquete', paqueteRoute);

router.get('/', auth, (req,res) =>{
    res.json({
        message: 'The Application Programming Interface Root'
    });
});

module.exports = router;