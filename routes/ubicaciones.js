const express = require('express');
const router = express.Router();
const Ubicacion = require('../models/Ubicacion');
const auth = require('../middleware/verifyToken');

router.get('/', auth, (req,res) => {
   res.json({
    message: 'not coded yet.'
   }); 
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
        const savedLocation = await ubicacion.save();
        res.status(200);
        res.json(savedLocation);
    }catch(err){
        res.json({
            message: 'Could not save the location.'
        });
    }

});

module.exports = router;