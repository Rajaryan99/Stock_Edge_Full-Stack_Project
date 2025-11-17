const mongoose   = require('mongoose');

const {OrderSchema}  = new OrderSchema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

module.exports = {OrderSchema};