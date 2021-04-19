const express = require('express');
const { route } = require('./auth');
const V1Route = require('./v1/router');
const router = express.Router();

router.get('/', (req,res) =>{
    res.json({
        message: 'API ROOT'
    });
});

router.use('/v1', V1Route);

module.exports = router;