const order_detail_model = require('../order_detail/orderDetailModel');

//Lay order_detail theo idOrder
const get_order_detail_by_idOrder = async (_idOrder) => {
    const order_details = await order_detail_model.find({ idOrder: _idOrder });
    return order_details;
};

//Lay order_detail theo idProduct
const get_order_detail_by_idProduct = async (_idProduct) => {
    const order_details = await order_detail_model.find({ idProduct: idProduct });
    return order_details;
};

//Add order_detail
const add_order_detail = async (totalPrice, amount, idOrder, idProduct) => {
    const order_detail = new order_detail_model({ totalPrice, amount, idOrder, idProduct });
    await order_detail.save();
    return order_detail;
};

module.exports = {
    add_order_detail, get_order_detail_by_idOrder, get_order_detail_by_idProduct
};