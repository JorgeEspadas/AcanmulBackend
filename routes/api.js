const express = require('express');
const { route } = require('./auth');
const router = express.Router();
const sec = require('../middleware/verifyToken');

router.get('/', sec, (req,res) =>{
    res.json({
        message: 'API ROOT'
    });
});

module.exports = router;