const jwt = require('jsonwebtoken');

/**
 * Este es un middleware que se ejcuta antes de cada ruta dentro de api.js
 * Verifica el token de acceso al usuario y de ser validado lo guarda en req.user (por si es necesario hacer algo con el usuario despues)
 * 
 */

module.exports = function(req,res,next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('You need to be logged in');

    try{
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        //console.log(verified.usr.name);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send('Token not valid :(');
    }
}