const product_model = require('../product/productModel');

//Lay tat ca product
const getProducts = async () => {
    const products = await product_model.find();
    return products;
};

//Lay product theo id
const get_product = async (_idProduct) => {
    const product = await product_model.findById(_idProduct);
    return product;
};

//Lay product theo idBrand
const get_product_by_idBrand = async (_idBrand) => {
    const products = await product_model.find({ idBrand: _idBrand });
    return products;
};

//Lay product theo idCategory
const get_product_by_idCategory = async (_idCategory) => {
    const products = await product_model.find({ idCategory: _idCategory });
    return products;
};

//Lay product theo idCategory va idBrand
const get_product_by_idCategory_idBrand = async (_idCategory, _idBrand) => {
    const products = await product_model.find({ idCategory: _idCategory, idBrand: _idBrand });
    return products;
};

//Cap nhat rate product
const update_rate_product = async (_idProduct, rate) => {
    const product = await product_model.findById(_idProduct);
    product.rate = rate;
    await product.save();
    return product;
};

//Add product
const add_product = async (name, price, description, quantity, color, image, rate, sale, idCategory, idBrand) => {
    const product = new product_model({ name, price, description, quantity, color, image, rate, sale, idCategory, idBrand });
    await product.save();
    return product;
};

module.exports = {
    add_product, get_product, get_product_by_idBrand, 
    getProducts, get_product_by_idCategory_idBrand,
    update_rate_product, get_product_by_idCategory
};