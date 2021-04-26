const express = require('express');
const router = express.Router();
const Ubicacion = require('../models/Ubicacion');
const auth = require('../middleware/verifyToken');

router.get('/:ubicacionId', auth, async (req,res) => {
   try{
    const foundLocation = await Ubicacion.findById(req.params.ubicacionId);
    res.json(foundLocation);
    console.log('Found Location with Id: '+req.params.ubicacionId);
}catch(err){
    res.json(err);
    console.log('Could not return location by id, '+err);
   }
});

router.get('/', auth, async (req,res) =>{
    try{
        const location = await Ubicacion.find();
        res.json(location);
        console.log('Sent all locations for user: '+req.user.token);
    }catch(err){
        res.json(err);
        console.log('Something happened, '+err);
    }
});

router.post('/', auth, async (req,res) =>{
    const ubicacion = new Ubicacion({
        titulo: req.body.titulo,
        description: req.body.description,
        tipo: req.body.tipo,
        ubicacion: req.body.ubicacion,
        image: req.body.image
    });
    
    try{
        await ubicacion.save();
        res.status(200);
        res.json({
            message: 'Location Saved!'
        });
        console.log('Saved Location with Id: '+ubicacion.id);
    }catch(err){
        res.json({
            message: 'Could not save the location.'
        });
        console.log('Location sent by: '+req.user.token+' could not be saved.');
    }

});

module.exports = router;