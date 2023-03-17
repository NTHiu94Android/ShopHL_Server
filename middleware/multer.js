const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  secure: true,
  cloud_name: 'dn46v6yn9',
  api_key: '648782375478592',
  api_secret: 'NrklW54a4wbl_689vLAT1eZQNtQ',
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ShopHL",
  },
});

// const cloudinaryImageUploadMethod = async (file) => {
//   return new Promise(resolve => {
//       cloudinary.uploader.upload(file, (err, res) => {
//           if (err) return res.status(500).send("upload image error")
//           resolve({
//               res: res.secure_url
//           })
//       }
//       )
//   })
// }
const upload = multer({ storage: storage });

module.exports = upload;
//module.exports = multer({ storage });