const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order_model = new Schema({
  orderDate: { type: Date },
  totalPrice: { type: number },
  status: { type: String },
  idUser: { type: String },
});

module.exports = mongoose.model('Order', order_model);