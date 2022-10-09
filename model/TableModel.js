const mongoose = require('mongoose');

const pr = new mongoose.Schema({
    Code: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Qty: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    Status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Product', pr);