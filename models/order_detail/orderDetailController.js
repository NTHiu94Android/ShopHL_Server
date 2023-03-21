const order_detail_service = require('../order_detail/orderDetailService');

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

module.exports = {
    add_order_detail, get_order_detail_by_idOrder, get_order_detail_by_idProduct
};