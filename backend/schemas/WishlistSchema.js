const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
});

module.exports = {WishlistSchema};