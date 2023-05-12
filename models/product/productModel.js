const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product_model = new Schema({
  name: { type: String },
  price: { type: Number },
  description: { type: String },
  quantity: { type: Number },
  color: { type: String },
  image: { type: String },
  rate: { type: Number },
  sale: { type: Number },
  idCategory: { type: String },
  idBrand: { type: String },
});

module.exports = mongoose.model('Product', product_model);