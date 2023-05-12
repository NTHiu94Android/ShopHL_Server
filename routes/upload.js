var express = require('express');
var router = express.Router();
const cloudinary = require('cloudinary').v2;

const multer = require('../middleware/multer');

//http://localhost:3000/upload/api/upload-image
router.post('/api/upload-image', multer.single('picture'), async function (req, res) {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        res.json({ error: true, responeTime: new Date(), statusCode: 500, data: result.secure_url });
    } catch (error) {
        console.log(error);
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

module.exports = router;
