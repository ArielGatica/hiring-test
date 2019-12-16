
const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = mongoose.model('Details', new Schema({
    type: { type: String, required: true },
    user: { type: Object, required: true },
    symbol: { type: String, required: true },
    shares: { type: Number, required: true },
    price: { type: Number, required: true }
}, { timestamp: true }));