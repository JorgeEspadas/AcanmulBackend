const mongoose = require('mongoose');
const ubicacionSchema = require('./Ubicacion');

/**
 * El precio y costos se ira al front end, nosotros solo pasamos los objetos del paquete (como tal)
 * El front end debera iterar entre las ubicaciones para pintar las polylines y sacar un precio aproximado.
 */

const PaqueteSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
    },
    images: [{
        url: String
    }],
    ubicaciones: [ubicacionSchema]
});

module.exports = mongoose.model('Paquetes', PaqueteSchema);