const picture_service = require('../picture/pictureService');

//Lay picture theo id
const get_picture = async (_idPic) => {
    try {
        const picture = await picture_service.get_picture(_idPic);
        return picture;
    } catch (error) {
        console.log('Error get picture: ' + error.message);
    }
};

//Lay pictures theo color va idProduct
const get_pictures_by_color = async (color, idProduct) => {
    try {
        const pictures = await picture_service.get_pictures_by_color(color, idProduct);
        return pictures;
    } catch (error) {
        console.log('Error get pictures by color: ' + error.message);
    }
};

//Lay pictures theo idProduct
const get_pictures_by_idProduct = async (idProduct) => {
    try {
        const pictures = await picture_service.get_pictures_by_idProduct(idProduct);
        return pictures;
    } catch (error) {
        console.log('Error get pictures by idProduct: ' + error.message);
    }
}

// Them picture
const add_picture = async (url, color, idProduct) => {
    try {
        const picture = await picture_service.add_picture(url, color, idProduct);
        return picture;
    } catch (error) {
        console.log('Error add picture: ' + error.message);
    }
};

module.exports = {
    add_picture, get_picture, get_pictures_by_color, get_pictures_by_idProduct
}