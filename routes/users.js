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
    if(user){
      const cart = await order_controller.add_order(new Date(), 0, 'cart', 0, user._id);
      const favorite = await order_controller.add_order(new Date(), 0, 'favorite', 0, user._id);
      user.cart = cart._id;
      user.favorite = favorite._id;
      user.save();
      res.json({ error: false, responeTime: new Date(), statusCode: 200, data: {user, cart, favorite} });
    }else{
      res.json({ error: true, responeTime: new Date(), statusCode: 500, message: 'Đăng ký thất bại' });
    }
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

//forgot password
//http://localhost:3000/users/api/forgot-password
router.post('/api/forgot-password', async function (req, res, next) {
  try {
    const { email } = req.body;
    const status = await user_controller.forgot_password(email);
    res.json({ error: false, responeTime: new Date(), statusCode: 200, data: status });
  } catch (error) {
    res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
  }
});

//reset password
//http://localhost:3000/users/api/reset-password
router.post('/api/reset-password', async function (req, res, next) {
  try {
    const { token, password, confirm_password} = req.body;
    const user = await user_controller.reset_password(token, password, confirm_password);
    res.json({ error: false, responeTime: new Date(), statusCode: 200, data: user });
  } catch (error) {
    res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
  }
});

module.exports = router;
