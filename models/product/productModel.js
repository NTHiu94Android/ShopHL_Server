const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product_model = new Schema({
  name: { type: String },
  price: { type: number },
  describer: { type: String },
  amount: { type: number },
  color: { type: String },
  idBrand: { type: String },
});

module.exports = mongoose.model('Product', product_model);