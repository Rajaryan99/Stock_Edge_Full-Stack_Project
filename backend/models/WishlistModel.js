const mongoose = require('mongoose');

const {WishlistSchema } = require('../schemas/WishlistSchema');

const WishlistModel = new mongoose.model('wishlist', WishlistModel);

module.exports = {WishlistModel};