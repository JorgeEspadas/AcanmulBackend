const jwt = require('jsonwebtoken');

module.exports = function(req,res,next) {
    const token = req.header('auth-token');

    if(!token) return res.status(401).send('You need to be logged in');

    try{
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        if(verified.usr.role != 1){
            //nada
            console.log(verified.usr.role);
            res.status(403).send('Not authorized to see this');
        }else{
            req.user = verified;
            next();
        }
    }catch(err){
        res.status(400).send(err);
    }
}