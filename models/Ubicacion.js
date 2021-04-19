const mongoose = require('mongoose');

/**
 * Titulo de la ubicacion: (ex. Edzna)
 * Desc: Descripcion de la ubicacion.
 * tipo: (ex. zona_arqueologica)
 * ubicacion: (su latitud y longitud, se tiene que buscar con google maps.)
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
    },
    ubicacion: [{
        lat : String,
        lng : String
    }]
});

module.exports('Ubicaciones', UbicacionSchema);