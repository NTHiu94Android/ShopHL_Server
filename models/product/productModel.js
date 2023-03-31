const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product_model = new Schema({
  name: { type: String },
  price: { type: Number },
  describer: { type: String },
  amount: { type: Number },
  color: { type: Array },
  brand: { type: String },
  listImage: { type: Array },
  reviews: { type: Number },
});

module.exports = mongoose.model('Product', product_model);