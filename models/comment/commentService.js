const cmt_model = require('../comment/commentModel');

//Lay comment theo idUser
const get_cmt_by_idUser = async (_idUser) => {
   const cmts = await cmt_model.find({ idUser: _idUser });
   return cmts;
};

// Lay comment theo idUser va idProduct
const get_cmt_by_idUser_and_idProduct = async (_idUser, _idProduct) => {
   const cmts = await cmt_model.find({ idUser: _idUser, idProduct: _idProduct });
   return cmts;
};

//Lay comment theo idComment
const get_cmt_by_id = async (_idCmt) => {
   const cmt = await cmt_model.findById(_idCmt);
   return cmt;
};

//Lay danh sach cmt theo idProduct
const get_cmt_by_idProduct = async (_idProduct) => {
   const cmts = await cmt_model.find({ idProduct: _idProduct });
   return cmts;
};

// add comment
const add_cmt = async (content, time, rate, idUser, idProduct) => {
   const cmt = new cmt_model({ content, time, rate, idUser, idProduct });
   await cmt.save();
   return cmt;
};

// update comment
const update_cmt = async (_idCmt, content, rate) => {
   const cmt = await cmt_model.findById(_idCmt);
   if (cmt) {
      cmt.content = content;
      cmt.rate = rate;
      await cmt.save();
      return cmt;
   }
   return null;
};

module.exports = {
   add_cmt, get_cmt_by_idUser, get_cmt_by_idUser_and_idProduct, get_cmt_by_id, get_cmt_by_idProduct, update_cmt
};