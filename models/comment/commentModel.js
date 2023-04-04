const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cmt_model = new Schema({
  content: { type: String },
  time: { type: String },
  rate: { type: Number },
  idProduct: { type: String },
  idUser: { type: String },

});

module.exports = mongoose.model('Comment', cmt_model);