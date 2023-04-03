var express = require('express');
var router = express.Router();
const order_controller = require('../models/order/orderController');

//Tạo order
//http://localhost:3000/order/api/create-order
router.post('/api/create-order', async function (req, res, next) {
    try {
        const { orderDate, totalPrice, status, quantity, idUser } = req.body;
        const order = await order_controller.add_order(orderDate, totalPrice, status, quantity, idUser);
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: order });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

//Lấy tất cả order
//http://localhost:3000/order/api/get-orders
router.get('/api/get-orders', async function (req, res, next) {
    try {
        const orders = await order_controller.get_orders();
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: orders });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

//Lấy order theo id
//http://localhost:3000/order/api/get-order-by-id/:idOrder
router.get('/api/get-order-by-id/:idOrder', async function (req, res, next) {
    try {
        const { idOrder } = req.params;
        const order = await order_controller.get_order_by_id(idOrder);
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: order });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

//Lấy order theo idUser
//http://localhost:3000/order/api/get-order-by-idUser/:idUser
router.get('/api/get-order-by-idUser/:idUser', async function (req, res, next) {
    try {
        const { idUser } = req.params;
        const order = await order_controller.get_order_by_idUser(idUser);
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: order });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

//Lấy order theo idUser và status
//http://localhost:3000/order/api/get-order-by-idUser-and-status/:idUser/:status
router.get('/api/get-order-by-idUser-and-status/:idUser/:status', async function (req, res, next) {
    try {
        const { idUser, status } = req.params;
        const order = await order_controller.get_order_by_idUser_and_status(idUser, status);
        res.json({ error: false, responeTime: new Date(), statusCode: 200, data: order });
    } catch (error) {
        res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
    }
});

module.exports = router;
