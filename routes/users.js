var express = require('express');
var router = express.Router();
const user_controller = require('../models/user/userController');

//Đăng ký user
//http://localhost:3000/users/api/register
router.post('/api/register', async function (req, res, next) {
  try {
    const { email, password, name, birthday, address, numberPhone, avatar } = req.body;
    const user = await user_controller
      .register(email, password, name, birthday, address, numberPhone, avatar);
    res.json({ error: false, responeTime: new Date(), statusCode: 200, data: user });
  } catch (error) {
    res.json({ error: true, responeTime: new Date(), statusCode: 500, message: error.message });
  }
});

module.exports = router;
