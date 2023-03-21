const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_model = new Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  name: { type: String, default: 'Bruno Fernandes'},
  birthday: { type: String, default: '01/01/1999' },
  address: { type: String, default: 'Dĩ An - Bình Dương'},
  numberPhone: { type: String, default: '0778023038'},
  avatar: { type: String, default: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' },
  //updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', user_model);