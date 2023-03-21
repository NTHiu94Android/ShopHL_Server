const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const picture_model = new Schema({
  url: { type: String },
  color: { type: String },
  idProduct: { type: String },
});

module.exports = mongoose.model('Picture', picture_model);