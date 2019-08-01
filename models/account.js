const mongoose = require('mongoose');

let AccountSchema = new mongoose.Schema({
    account: {
        type: String,
        required: [true, 'La cuenta es necesaria']
    },
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'El usuario es necesario']
      },
    amount: {
        type: Number,
        required: [true, 'El importe es necesario']
    },
    type: {
        type: String,
        required: [true, 'Tipo de cuenta necesario']
    },
}, {timestamps: true});

module.exports = mongoose.model('Account', AccountSchema);
