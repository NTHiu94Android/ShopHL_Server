var express = require('express');
var router = express.Router();
const user_controller = require('../models/user/userController');
const order_controller = require('../models/order/orderController');

//Đăng ký user tao luon cart va favorite cua user
//http://localhost:3000/users/api/register
router.post('/api/register', async function (req, res, next) {
  try {
    const { email, password, name, birthday, address, numberPhone, avatar } = req.body;
    const user = await user_controller
      .register(email, password, name, birthday, address, numberPhone, avatar);
    const cart = await order_controller.add_order(new Date(), 0, 'cart', user._id);
    const favorite = await order_controller.add_order(new Date(), 0, 'favorite', user._id);
    user.cart = cart._id;
    user.favorite = favorite._id;
    user.save();
    res.json({ error: false, responeTime: new Date(), statusCode: 200, data: {user, cart, favorite} });
  } catch (error) {
    res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
  }
});

//Đăng nhập user
//http://localhost:3000/users/api/login
router.post('/api/login', async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await user_controller.login(email, password);
    res.json({ error: false, responeTime: new Date(), statusCode: 200, data: user });
  } catch (error) {
    res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
  }
});

module.exports = router;
