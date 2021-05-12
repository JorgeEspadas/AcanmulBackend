const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/verifyToken');

router.get('/',auth, async(req,res) => {
    res.json({message:"User_Search API Endpoint"});
});

router.get('/:token', auth, async (req,res) =>{
    try{
        // see if the user has the same token to send their data,
        // do not send if token does not match.
        const locatedUser = await User.find({"token":req.params.token});
        if(locatedUser.length>=1){
            res.status(200);
            res.json({
                name: locatedUser[0].toObject().name,
                email: locatedUser[0].toObject().email
            });
        }
    }catch(err){
        res.status(404);
        res.json({
            message: err
        });
    }
});

module.exports = router;