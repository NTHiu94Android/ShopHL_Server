const picture_model = require('../picture/pictureModel');

//Lay picture theo id
const get_picture = async (_idPic) => {
    const picture = await picture_model.findById(_idPic);
    return picture;
};

//Lay pictures theo idProduct
const get_pictures_by_idProduct = async (idProduct) => {
    const pictures = await picture_model.find({ idProduct: idProduct });
    return pictures;
};

// Them picture
const add_picture = async (url, idProduct, idReview, idMessage) => {
    const picture = new picture_model({ url, idProduct, idReview, idMessage });
    await picture.save();
    return picture;
};

module.exports = { 
    add_picture, get_picture, get_pictures_by_idProduct
};