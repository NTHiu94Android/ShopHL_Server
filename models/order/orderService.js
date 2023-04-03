const order_model = require('../order/orderModel');

//Lay order theo idUser
const get_order_by_idUser = async (_idUser) => {
    const orders = await order_model.find({ idUser: _idUser });
    return orders;
};

// Lay order theo idUser va status
const get_order_by_idUser_and_status = async (_idUser, _status) => {
    const orders = await order_model.find({ idUser: _idUser, status: _status });
    return orders;
};

//Lay order theo id
const get_order_by_id = async (_idOrder) => {
    const order = await order_model.findById(_idOrder);
    return order;
};

// add order
const add_order = async (orderDate, totalPrice, status, quantity, idUser) => {
    const order = new order_model({ orderDate, totalPrice, status, quantity, idUser });
    await order.save();
    return order;
};

module.exports = {
    add_order, get_order_by_idUser, get_order_by_idUser_and_status, get_order_by_id
};