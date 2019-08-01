const mongoose = require('mongoose');

let MovementSchema = new mongoose.Schema({
  //  account:{
  //      type: mongoose.Schema.Types.ObjectId.ref:'Account',
  //      required: [true, 'La cuenta es necesaria']
  //  },
    account:{
        type: String,
        required: [true, 'La cuenta es necesaria']
    },
    amount:{
        type: Number,
        required: [true, 'El importe es necesario']
    },
    description:{
        type: String,
        required: [true, 'La descripcion es necesaria']
    },
    date: {
        type: Date,
        required: [true, 'La fecha es necesaria']
    },
    type: {
        type: String,
        required: [true, 'Tipo de movimiento necesario']
    },
    location: {
        type: {type: String, default: 'Point'},
        coordinates:{ type: [Number], default: [0, 0]}
    },
}, {timestamps: true});

module.exports = mongoose.model('Movement', MovementSchema);
