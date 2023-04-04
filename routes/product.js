var express = require('express');
var router = express.Router();
const product_controller = require('../models/product/productController');

//Lấy tất cả sản phẩm
//http://localhost:3000/product/api/get-products
router.get('/api/get-products', async function (req, res, next) {
    try {
        const products = await product_controller.onGetProducts();
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: products });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

//Lấy sản phẩm theo id
//http://localhost:3000/product/api/get-product-by-id/5f9f1b0b0b1b1b1b1b1b1b1b
router.get('/api/get-product-by-id/:id', async function (req, res, next) {
    try {
        const product = await product_controller.get_product(req.params.id);
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: product });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

//Lấy sản phẩm theo idBrand
//http://localhost:3000/product/api/get-product-by-idBrand/5f9f1b0b0b1b1b1b1b1b1b1b
router.get('/api/get-product-by-idBrand/:id', async function (req, res, next) {
    try {
        const products = await product_controller.get_product_by_idBrand(req.params.id);
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: products });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});




module.exports = router;
