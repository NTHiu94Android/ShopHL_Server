var express = require('express');
var router = express.Router();

const cloudinary = require('cloudinary').v2;

const multer = require('../middleware/multer');

const picture_controller = require('../models/picture/pictureController');

//Lay picture theo id
router.get('/get_picture/:id', async (req, res) => {
   try{
      const id = req.params.id;
      const picture = await picture_controller.get_picture(id);
      res.json({ error: false, responeTime: new Date(), statusCode: 200, data: picture });
   }catch(error){
      console.log('Error get picture by id: ' + error.message);
   }
});

//Lay pictures theo color va idProduct
router.get('/get_pictures_by_color/:color/:idProduct', async (req, res) => {
   try{
      const color = req.params.color;
      const idProduct = req.params.idProduct;
      const pictures = await picture_controller.get_pictures_by_color(color, idProduct);
      res.json({ error: false, responeTime: new Date(), statusCode: 200, data: pictures });
   }catch(error){
      console.log('Error get pictures by color: ' + error.message);
   }
});

//Lay pictures theo idProduct
router.get('/get_pictures_by_idProduct/:idProduct', async (req, res) => {
   try{
      const idProduct = req.params.idProduct;
      const pictures = await picture_controller.get_pictures_by_idProduct(idProduct);
      res.json({ error: false, responeTime: new Date(), statusCode: 200, data: pictures });
   }catch(error){
      console.log('Error get pictures by idProduct: ' + error.message);
   }
});

// Them picture
router.post('/add_picture', async (req, res) => {
   try{
      const picture = await picture_controller.add_picture(req.body.color, req.body.idProduct, req.body.url);
      res.json({ error: false, responeTime: new Date(), statusCode: 200, data: picture });
   }catch(error){
      console.log('Error add picture: ' + error.message);
   }
});

//Upload picture
//http://localhost:3000/picture/api/upload-images
router.post('/api/upload-images', multer.array('pictures', 5), async function (req, res) {
   try {
       if (req.files.length <= 0) {
           console.log('Vui lòng chọn ít nhất một hình ảnh.');
           return res.status(400).send('Vui lòng chọn ít nhất một hình ảnh.');
       }
       //console.log(req.files[0]);
       const imageLinks = [];
       // Lặp qua các file đã upload
       for (const file of req.files) {
           // Upload file lên Cloudinary và lấy public_id và secure_url của file
           const result = await cloudinary.uploader.upload(file.path);

           // Thêm public_id và secure_url của file vào mảng imageLinks
           // imageLinks.push({
           //     public_id: result.public_id,
           //     url: result.secure_url
           // });
           imageLinks.push(result.secure_url);
       }
       // Trả về một mảng chứa các đường dẫn ảnh đã upload
       res.json({ error: false, responeTime: new Date(), statusCode: 200, data: imageLinks[0] });
   } catch (error) {
       res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
   }
});



module.exports = router;
