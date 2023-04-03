const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order_model = new Schema({
  orderDate: { type: String },
  totalPrice: { type: Number },
  status: { type: String },
  quantity: { type: Number },
  //"cart", "favorite", "ordered", "shipping", "delivered", "canceled", "returned", 
  idUser: { type: String },
});

module.exports = mongoose.model('Order', order_model);