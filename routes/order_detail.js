var express = require('express');
var router = express.Router();
const order_detail_controller = require('../models/order_detail/orderDetailController');

//Lay order_detail theo idOrder
//http://localhost:3000/order_detail/api/get-order_detail-by-idOrder/5f9f1b0b0b1b1b1b1b1b1b1b
router.get('/api/get-order_detail-by-idOrder/:id', async function (req, res, next) {
    try {
        const order_details = await order_detail_controller.get_order_detail_by_idOrder(req.params.id);
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: order_details });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

//Lay order_detail theo idProduct
//http://localhost:3000/order_detail/api/get-order_detail-by-idProduct/5f9f1b0b0b1b1b1b1b1b1b1b
router.get('/api/get-order_detail-by-idProduct/:id', async function (req, res, next) {
    try {
        const order_details = await order_detail_controller.get_order_detail_by_idProduct(req.params.id);
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: order_details });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

//Them order_detail
//http://localhost:3000/order_detail/api/add-order_detail
router.post('/api/add-order_detail', async function (req, res, next) {
    try {
        const order_detail = await order_detail_controller.add_order_detail(
            req.body.totalPrice, req.body.amount, req.body.idOrder, req.body.idProduct
        );
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: order_detail });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});


module.exports = router;
