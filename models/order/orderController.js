const order_service = require('../order/orderService');

//Lay order theo idUser
const get_order_by_idUser = async (_idUser) => {
    try {
        const orders = await order_service.get_order_by_idUser(_idUser);
        return orders;
    } catch (error) {
        console.log('Error get order by idUser: ' + error.message);
    }
};

// Lay order theo id
const get_order_by_id = async (_idOrder) => {
    try {
        const order = await order_service.get_order_by_id(_idOrder);
        return order;
    } catch (error) {
        console.log('Error get order by id: ' + error.message);
    }
};

// Lay order theo idUser va status
const get_order_by_idUser_and_status = async (_idUser, _status) => {
    try {
        const orders = await order_service.get_order_by_idUser_and_status(_idUser, _status);
        return orders;
    } catch (error) {
        console.log('Error get order by idUser and status: ' + error.message);
    }
};

// add order
const add_order = async (orderDate, totalPrice, status, quantity, idUser) => {
    try {
        const order = await order_service.add_order(orderDate, totalPrice, status, quantity, idUser);
        return order;
    } catch (error) {
        console.log('Error add order: ' + error.message);
    }
};

module.exports = {
    add_order, get_order_by_idUser, get_order_by_idUser_and_status, get_order_by_id
};