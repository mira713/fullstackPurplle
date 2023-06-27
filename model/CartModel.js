const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    href:{type:String},
    img: {type:String},
    offers: {type:String},
    name: {type:String},
    src: {type:String},
    price: {type : Number},
    mrl5: {type : Number},
    off2: {type:String},
    quantity: { type: Number, required: true },
    rating: {type : Number},
    ratingCount: {type:String},
    tkPk: {type:String},
    user : {type:String},
  },
  {
    versionKey: false,
  }
);

const CartModel = mongoose.model("/cart", cartSchema);

module.exports = {
  CartModel,
};
