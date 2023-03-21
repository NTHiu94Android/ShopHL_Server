const product_model = require('../product/productModel');

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

//Add product
const add_product = async (name, price, describer, amount, color, idBrand) => {
    const product = new product_model({ name, price, describer, amount, color, idBrand });
    await product.save();
    return product;
};

module.exports = {
    add_product, get_product, get_product_by_idBrand
};