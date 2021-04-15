const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { route } = require('./api');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const secretkey = 'supersecretykeyalv.';


router.get('/', (req,res) =>{
    res.json({
        message: 'Auth API Route File.'
    });
});

router.post('/login', async (req, res) =>{
    /*
     *  Recibimos los datos de login, evaluamos si existe y coincide la contrasena.
     *  De existir regresamos el token, si no regresamos un error. 
     * 
     */
    try{
        console.log(req.body);
        const lookup = await User.find({"email": req.body.email});
        if(lookup.length >= 1){
            // Si encontramos el usuario.
            if(req.body.password == lookup[0].toObject().password){
                console.log('Valid login for: '+req.body.email);
                res.json({status: 200, login: 'valid', token: lookup[0].toObject().token});
            }else{
                res.json({status: 400, login: 'invalid'});
            }
        }else{
            res.json({status: 404, login: 'notfound'});
        }
    }catch(err){
        res.json(err);
    }
});

router.post('/recover', async (req,res) =>{
    /*
     * Recuperacion de contrasena, como quiensabe, probablemente ni lo llene.
    */
});

router.post('/signup', async (req,res) =>{
    /*
     * Recibimos una solicitud de registro
     * Verificamos que el usuario no exista
     * Si existe regresamos un error, si no existe lo registramos con todo y token en la base de datos de mongoose.
     * Al registrarse regresamos el "auth succesful y el token."
    */
    
    // Creamos un usuario con los valores enviados por el cliente.
    const usr = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    });

    // validamos que no exista el registro en la base de datos.
    try{
        //console.log('alv');
        const temp = await User.find({"email":usr.email});
        if(temp.length < 1){
            // Si no encontro al usuario, lo registra.
            console.log('User was not found, Signing Up.');
            jwt.sign({usr}, secretkey, (err, token) =>{
                usr.token = token;
            });

            await usr.save();
            res.json({
                status: 200,
                signup: 'valid',
                token: usr.token
            });
            console.log('Sign up valid for: ' + usr.email);
        }else{
            // Se encontro al usuario, asi que no hacemos un registro, simplemente retornamos un objeto que diga que ya esta registrado.
            res.json({
                status: 400,
                signup: 'invalid'
            });
        }
            
    }catch(err){
        res.json({message: err});
    }
    
});


module.exports = router;