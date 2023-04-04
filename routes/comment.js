var express = require('express');
var router = express.Router();
const cmt_controller = require('../models/comment/commentController');

//Tạo comment
//http://localhost:3000/comment/api/create-comment
router.post('/api/create-comment', async function (req, res, next) {
   try {
      //Lay ngay thang nam hien tai
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!
      let yyyy = today.getFullYear();
      if (dd < 10) {
         dd = '0' + dd;
      }
      if (mm < 10) {
         mm = '0' + mm;
      }
      today = dd + '/' + mm + '/' + yyyy;
      const { content, rate, idUser, idProduct } = req.body;
      const comment = await cmt_controller.add_cmt(content, today, rate, idUser, idProduct);
      res.json({ error: false, responeTime: new Date(), statusCode: 200, data: comment });
   } catch (error) {
      res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
   }
});

//Lay comment theo idUser
//http://localhost:3000/comment/api/get-comment-by-idUser/:idUser
router.get('/api/get-comment-by-idUser/:idUser', async function (req, res, next) {
   try {
      const { idUser } = req.params;
      const comments = await cmt_controller.get_cmt_by_idUser(idUser);
      res.json({ error: false, responeTime: new Date(), statusCode: 200, data: comments });
   } catch (error) {
      res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
   }
});

//Lay comment theo idUser va idProduct
//http://localhost:3000/comment/api/get-comment-by-idUser-and-idProduct
router.get('/api/get-comment-by-idUser-and-idProduct/:idUser/:idProduct', async function (req, res, next) {
   try {
      const { idUser, idProduct } = req.params;
      const comments = await cmt_controller.get_cmt_by_idUser_and_idProduct(idUser, idProduct);
      res.json({ error: false, responeTime: new Date(), statusCode: 200, data: comments });
   } catch (error) {
      res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
   }
});

//Lay comment theo id
//http://localhost:3000/comment/api/get-comment-by-id/:idCmt
router.get('/api/get-comment-by-id/:idCmt', async function (req, res, next) {
   try {
      const { idCmt } = req.params;
      const comment = await cmt_controller.get_cmt_by_id(idCmt);
      res.json({ error: false, responeTime: new Date(), statusCode: 200, data: comment });
   } catch (error) {
      res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
   }
});

//Lay comment theo idProduct
//http://localhost:3000/comment/api/get-comment-by-idProduct/:idProduct
router.get('/api/get-comment-by-idProduct/:idProduct', async function (req, res, next) {
   try {
      const { idProduct } = req.params;
      const comments = await cmt_controller.get_cmt_by_idProduct(idProduct);
      res.json({ error: false, responeTime: new Date(), statusCode: 200, data: comments });
   } catch (error) {
      res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
   }
});

//Cap nhat comment
//http://localhost:3000/comment/api/update-comment
router.post('/api/update-comment', async function (req, res, next) {
   try {
      const { idCmt, content, rate } = req.body;
      const comment = await cmt_controller.update_cmt(idCmt, content, rate);
      res.json({ error: false, responeTime: new Date(), statusCode: 200, data: comment });
   } catch (error) {
      res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
   }
});


module.exports = router;