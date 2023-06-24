const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    href: String,
    img: String,
    offers: String,
    name: String,
    src: String,
    price: Number,
    mrl5: Number,
    off2: String,
    quantity:Number,
    rating: Number,
    ratingCount: String,
    tkPk: String,
    user : String
  },
  {
    versionKey: false,
  }
);

const CartModel = mongoose.model("/cart", cartSchema);

module.exports = {
  CartModel,
};
