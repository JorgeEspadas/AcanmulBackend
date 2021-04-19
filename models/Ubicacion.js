const mongoose = require('mongoose');

/**
 * Titulo de la ubicacion: (ex. Edzna)
 * Desc: Descripcion de la ubicacion.
 * tipo: (ex. zona_arqueologica)
 * ubicacion: (su latitud y longitud, se tiene que buscar con google maps.)
 * image: una unica imagen de desripcion del lugar.
 */

const UbicacionSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    tipo: {
        type: String,
        required: true
    },
    ubicacion: [{
        lat : String,
        lng : String
    }],
    image: {
        type: String,
        required: true
    }
});

module.exports('Ubicaciones', UbicacionSchema);