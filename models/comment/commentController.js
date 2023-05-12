const cmt_service = require('../comment/commentService');

//Lay comment theo idUser
const get_cmt_by_idUser = async (idUser) => {
   try {
      const cmts = await cmt_service.get_cmt_by_idUser(idUser);
      return cmts;
   } catch (error) {
      console.log("Get comment by idUser error: " + error);
   }
};

// Lay comment theo idUser va idProduct
const get_cmt_by_idUser_and_idProduct = async (idUser, idProduct) => {
   try {
      const cmts = await cmt_service.get_cmt_by_idUser_and_idProduct(idUser, idProduct);
      return cmts;
   } catch (error) {
      console.log("Get comment by idUser and idProduct error: " + error);
   }
};

//Lay comment theo idComment
const get_cmt_by_id = async (idCmt) => {
   try {
      const cmt = await cmt_service.get_cmt_by_id(idCmt);
      return cmt;
   } catch (error) {
      console.log("Get comment by id error: " + error);
   }
};

//Lay cmt theo idProduct
const get_cmt_by_idProduct = async (idProduct) => {
   try {
      const cmts = await cmt_service.get_cmt_by_idProduct(idProduct);
      return cmts;
   } catch (error) {
      console.log("Get comment by idProduct error: " + error);
   }
};

// add comment
const add_cmt = async (content, time, rate, idUser, idProduct) => {
   try {
      const cmt = await cmt_service.add_cmt(content, time, rate, idUser, idProduct);
      return cmt;
   } catch (error) {
      console.log("Add comment error: " + error);
   }
};

// update comment
const update_cmt = async (_idCmt, content, rate) => {
   try {
      const cmt = await cmt_service.update_cmt(_idCmt, content, rate);
      return cmt;
   } catch (error) {
      console.log("Update comment error: " + error);
   }
};


module.exports = {
   add_cmt, get_cmt_by_idUser, get_cmt_by_idUser_and_idProduct, 
   get_cmt_by_id, get_cmt_by_idProduct, update_cmt
};