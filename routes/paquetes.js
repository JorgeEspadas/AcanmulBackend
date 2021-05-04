const express = require('express');
const router = express.Router();
const Paquete = require('../models/Paquete');
const auth = require('../middleware/verifyToken');

router.get('/', auth, async(req,res) => {
    try{
        const allPackages = await Paquete.find().populate('ubicaciones').exec();
        res.status(200);
        res.json(allPackages);
        //console.log('Sent All Pkgs to: ' + req.header('auth-token'));
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
        //console.log('Sent Pkg Id: '+ req.params.paqueteId);
    }catch(err){
        res.status(401);
        res.json(err);
    }
});

router.post('/', auth, async (req, res) =>{
    const tempPackage = new Paquete({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        ubicaciones: req.body.ubicaciones
    });

    try{
        const savedPackage = await tempPackage.save();
        res.status(200);
        res.json(savedPackage);
        console.log('Saved Pkg with Id'+ savedPackage.id);
    }catch(err){
        res.json(err);
    }
});

module.exports = router;