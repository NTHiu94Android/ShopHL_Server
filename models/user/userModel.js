const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_model = new Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  name: { type: String },
  birthday: { type: String, default: '' },
  address: { type: String, default: ''},
  numberPhone: { type: String, default: ''},
  avatar: { type: String, default: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' },
  //updateAt: { type: Date, default: Date.now },
  cart: {type: Object},
  favorite: {type: Object},
});

module.exports = mongoose.model('User', user_model);