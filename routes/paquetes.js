const express = require('express');
const router = express.Router();
const Paquete = require('../models/Paquete');
const auth = require('../middleware/verifyToken');

router.get('/', auth, async(req,res) => {
    res.json({
        message: "Ruta de paquete."
    });
});

router.post('/', auth, async (req, res) =>{
    const tempPackage = new Paquete({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        images: req.body.images,
        ubicaciones: req.body.ubicaciones
    });

    try{
        const savedPackage = await tempPackage.save();
        res.status(200);
        res.json(savedPackage);
    }catch(err){
        res.json(err);
    }
});

module.exports = router;