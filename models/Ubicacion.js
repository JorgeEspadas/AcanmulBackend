const mongoose = require('mongoose');

/**
 * Titulo de la ubicacion: (ex. Edzna)
 * Desc: Descripcion de la ubicacion.
 * tipo: (ex. zona_arqueologica)
 * ubicacion: (su latitud y longitud, se tiene que buscar con google maps.)
 * image: una unica imagen de desripcion del lugar.
 * ----------------------------------
 * hay mas campos pero ya me vale pito, esta en espanol, leelo xdddddddddddd
 * 
 * acceso : como llegar xd
 * significado : el significado del lugar :v
 * horario : pos el horario de operacion del lugar >:v
 * servicios cercanos: que si hay banio xd
 * costo de acceso: ps no es gratis`
 */

const UbicacionSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    significado: {
        type: String
    },
    acceso: {
        type: String
    },
    horario: {
        type: String
    },
    costo_de_acceso: {
        type: String
    },
    servicios_cercanos: {
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
    imagen: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Ubicaciones', UbicacionSchema);