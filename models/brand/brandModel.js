const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brand_model = new Schema({
  name: { type: String },
  picture: { type: String },
});

module.exports = mongoose.model('Brand', brand_model);