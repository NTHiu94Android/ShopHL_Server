const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order_model = new Schema({
  orderDate: { type: Date },
  totalPrice: { type: Number },
  status: { type: String },
  //"cart", "favorite", "ordered", "shipping", "delivered", "canceled", "returned", 
  idUser: { type: String },
});

module.exports = mongoose.model('Order', order_model);