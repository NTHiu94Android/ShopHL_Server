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

//Lay product theo idCategory
const get_product_by_idCategory = async (_idCategory) => {
    try {
        const products = await product_service.get_product_by_idCategory(_idCategory);
        return products;
    } catch (error) {
        console.log('Error get product by idCategory: ' + error.message);
    }
};

//Lay product theo idCategory va idBrand
const get_product_by_idCategory_idBrand = async (_idCategory, _idBrand) => {
    try {
        const products = await product_service.get_product_by_idCategory_idBrand(_idCategory, _idBrand);
        return products;
    } catch (error) {
        console.log('Error get product by idCategory and idBrand: ' + error.message);
    }
};

//Cap nhat rate product
const update_rate_product = async (_idProduct, rate) => {
    try {
        const product = await product_service.update_rate_product(_idProduct, rate);
        return product;
    } catch (error) {
        console.log('Error update rate product: ' + error.message);
    }
};

//Add product
const add_product = async (name, price, description, quantity, color, image, rate, sale, ram, rom, screen, chip, pin, idCategory, idBrand) => {
    try {
        const product = await product_service.add_product(name, price, description, quantity, color, image, rate, sale, ram, rom, screen, chip, pin, idCategory, idBrand);
        return product;
    } catch (error) {
        console.log('Error add product: ' + error.message);
    }
};

module.exports = {
    add_product, get_product, get_product_by_idBrand, onGetProducts,
    get_product_by_idCategory_idBrand, update_rate_product,
    get_product_by_idCategory
};