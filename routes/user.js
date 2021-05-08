const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/verifyToken');

router.get('/', async(req,res) => {
    res.json({message:"a"});
});

router.get('/:token', auth, async (req,res) =>{
    try{
        // see if the user has the same token to send their data,
        // do not send if token does not match.
        // also check for admin role, check if the looker token has acces level 1, if not, deny access (by crashing obv because tokens on db dont match)
        const looker = await User.find({"token":req.headers['auth-token']});
        const locatedUser = await User.find({"token":req.params.token});
        if(locatedUser.length>=1){
            if(req.headers['auth-token'] == req.params.token){
                    res.status(200).json({
                        name: locatedUser[0].toObject().name,
                        email: locatedUser[0].toObject().email
                    });
            }else{
                if(looker[0].toObject().role == 1){
                    res.status(200).json({
                        name: locatedUser[0].toObject().name,
                        email: locatedUser[0].toObject().email
                    });
                }else{
                    res.status(401).json({message: "This is not your info or you are not an admin."});
                }
            }
        }
    }catch(err){
        res.status(404);
        res.json({
            message: "Check your credentials."
        });
    }
});

module.exports = router;