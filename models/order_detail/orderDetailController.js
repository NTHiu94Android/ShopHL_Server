const order_detail_service = require('../order_detail/orderDetailService');

//Lay order_detail theo id
const get_order_detail_by_id = async (_id) => {
    try {
        const order_detail = await order_detail_service.get_order_detail_by_id(_id);
        return order_detail;
    } catch (error) {
        console.log('Error get order detail by id: ' + error.message);
    }
};

//Lay order_detail theo idOrder
const get_order_detail_by_idOrder = async (_idOrder) => {
    try {
        const order_details = await order_detail_service.get_order_detail_by_idOrder(_idOrder);
        return order_details;
    } catch (error) {
        console.log('Error get order detail by idOrder: ' + error.message);
    }
};

//Lay order_detail theo idProduct
const get_order_detail_by_idProduct = async (_idProduct) => {
    try {
        const order_details = await order_detail_service.get_order_detail_by_idProduct(_idProduct);
        return order_details;
    } catch (error) {
        console.log('Error get order detail by idProduct: ' + error.message);
    }
};

//Add order_detail
const add_order_detail = async (totalPrice, amount, idOrder, idProduct) => {
    try {
        const order_detail = await order_detail_service.add_order_detail(totalPrice, amount, idOrder, idProduct);
        return order_detail;
    } catch (error) {
        console.log('Error add order detail: ' + error.message);
    }
};

//Delete order_detail
const delete_order_detail = async (_id) => {
    try {
        const response = await order_detail_service.delete_order_detail(_id);
        return response;
    } catch (error) {
        console.log('Error delete order detail: ' + error.message);
    }
};

//Update order_detail
const update_order_detail = async (_id, totalPrice, amount, idOrder, idProduct) => {
    try {
        await order_detail_service.update_order_detail(_id, totalPrice, amount, idOrder, idProduct);
        const order_detail_update = await order_detail_service.get_order_detail_by_id(_id);
        return order_detail_update;
    } catch (error) {
        console.log('Error update order detail: ' + error.message);
    }
};

module.exports = {
    add_order_detail, get_order_detail_by_idOrder, get_order_detail_by_idProduct,
    delete_order_detail, update_order_detail, get_order_detail_by_id
};