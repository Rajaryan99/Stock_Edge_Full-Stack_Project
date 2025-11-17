const mongoose = require(mongoose);

const { model } = require('mongoose');
const WishlistSchema = require('../schemas/WishlistSchema');

const WishlistModel  = new mongoose.model('wishlist',WishlistSchema );

module.exports = {WishlistModel};
