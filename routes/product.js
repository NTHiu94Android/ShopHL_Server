var express = require('express');
var router = express.Router();
const product_controller = require('../models/product/productController');

const authen = require('../middleware/auth');

//Lấy tất cả sản phẩm
//http://localhost:3000/product/api/get-products
router.get('/api/get-products', [authen], async function (req, res, next) {
    try {
        const products = await product_controller.onGetProducts();
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: products });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

//Lấy sản phẩm theo id
//http://localhost:3000/product/api/get-product-by-id/5f9f1b0b0b1b1b1b1b1b1b1b
router.get('/api/get-product-by-id/:id', [authen], async function (req, res, next) {
    try {
        const product = await product_controller.get_product(req.params.id);
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: product });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

//Lấy sản phẩm theo idBrand
//http://localhost:3000/product/api/get-product-by-idBrand/5f9f1b0b0b1b1b1b1b1b1b1b
router.get('/api/get-product-by-idBrand/:id', [authen], async function (req, res, next) {
    try {
        const products = await product_controller.get_product_by_idBrand(req.params.id);
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: products });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

//Lấy sản phẩm theo idCategory
//http://localhost:3000/product/api/get-product-by-idCategory/5f9f1b0b0b1b1b1b1b1b1b1b
router.get('/api/get-product-by-idCategory/:id', [authen], async function (req, res, next) {
    try {
        const products = await product_controller.get_product_by_idCategory(req.params.id);
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: products });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

//Lấy sản phẩm theo idCategory và idBrand
//http://localhost:3000/product/api/get-product-by-idCategory-idBrand/5f9f1b0b0b1b1b1b1b1b1b1b/5f9f1b0b0b1b1b1b1b1b1b1b
router.get('/api/get-product-by-idCategory-idBrand/:idCategory/:idBrand', [authen], async function (req, res, next) {
    try {
        const products = await product_controller.get_product_by_idCategory_idBrand(req.params.idCategory, req.params.idBrand);
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: products });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

//Cập nhật rate sản phẩm
//http://localhost:3000/product/api/update-rate-product/5f9f1b0b0b1b1b1b1b1b1b1b/4
router.post('/api/update-rate-product', [authen], async function (req, res, next) {
    try {
        const {id, rate} = req.body;
        const product = await product_controller.update_rate_product(id, rate);
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: product });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});




//----------------------CPANEL----------------------//

//Thêm sản phẩm
//http://localhost:3000/product/cpanel/add-product
router.post('/cpanel/add-product', [authen], async function (req, res, next) {
    try {
        const {name, price, description, quantity, color, image, rate, sale, idCategory, idBrand} = req.body;
        const product = await product_controller.add_product(name, price, description, quantity, color, image, rate, sale, idCategory, idBrand);
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: product });
    } catch (error) { 
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});


module.exports = router;
