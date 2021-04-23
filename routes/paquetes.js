const express = require('express');
const router = express.Router();
const Paquete = require('../models/Paquete');
const auth = require('../middleware/verifyToken');

router.get('/', auth, async(req,res) => {
    try{
        console.log('Received get-all packages.');
        const allPackages = await Paquete.find();
        res.status(200);
        res.json(allPackages);
    }catch(err){
        res.status(401);
        res.json(err);
    }
});

router.get('/:paqueteId', auth, async(req,res) => {
    try{
        const foundPackage = await Paquete.findById(req.params.paqueteId);
        res.status(200);
        res.json(foundPackage);
    }catch(err){
        res.status(401);
        res.json(err);
    }
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