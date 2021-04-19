const mongoose = require('mongoose');

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
});

module.exports('Paquetes', PaqueteSchema);