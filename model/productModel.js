const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    href: String,
    img: String,
    offers: String,
    name: String,
    src: String,
    price: Number,
    mrl5: Number,
    off2: String,
    rating: Number,
    ratingCount: String,
    tkPk: String
},{
    versionKey : false
})

const ProductModel = mongoose.model('product',ProductSchema);

module.exports = {
    ProductModel
}

















