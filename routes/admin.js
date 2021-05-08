const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/verifyAdmin');

router.get('/',auth, async(req,res) =>{
    res.status(200).send('Admin API');
});

module.exports = router;
