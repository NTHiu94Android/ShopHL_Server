const product_service = require('../product/productService');

//Lay tat ca product
const onGetProducts = async () => {
    try {
        const products = await product_service.getProducts();
        return products;
    } catch (error) {
        console.log('Error get products: ' + error.message);
    }
};

//Lay product theo id
const get_product = async (_idProduct) => {
    try {
        const product = await product_service.get_product(_idProduct);
        return product;
    } catch (error) {
        console.log('Error get product by id: ' + error.message);
    }
};

//Lay product theo idBrand
const get_product_by_idBrand = async (_idBrand) => {
    try {
        const products = await product_service.get_product_by_idBrand(_idBrand);
        return products;
    } catch (error) {
        console.log('Error get product by idBrand: ' + error.message);
    }
};

//Add product
const add_product = async (name, price, describer, amount, color, idBrand, listImage, reviews) => {
    try {
        const product = await product_service.add_product(name, price, describer, amount, color, idBrand, listImage, reviews);
        return product;
    } catch (error) {
        console.log('Error add product: ' + error.message);
    }
};

module.exports = {
    add_product, get_product, get_product_by_idBrand, onGetProducts
};