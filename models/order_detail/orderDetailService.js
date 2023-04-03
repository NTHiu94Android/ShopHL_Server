const order_detail_model = require('../order_detail/orderDetailModel');

//Lay order_detail theo id
const get_order_detail_by_id = async (_id) => {
    const order_detail = await order_detail_model.findById(_id);
    return order_detail;
};
//Lay order_detail theo idOrder
const get_order_detail_by_idOrder = async (_idOrder) => {
    const order_details = await order_detail_model.find({ idOrder: _idOrder });
    return order_details;
};

//Lay order_detail theo idProduct
const get_order_detail_by_idProduct = async (_idProduct) => {
    const order_details = await order_detail_model.find({ idProduct: _idProduct });
    return order_details;
};

//Add order_detail
const add_order_detail = async (totalPrice, amount, idOrder, idProduct) => {
    const order_detail = new order_detail_model({ totalPrice, amount, idOrder, idProduct });
    await order_detail.save();
    return order_detail;
};

//Delete order_detail
const delete_order_detail = async (_id) => {
    await order_detail_model.findByIdAndDelete(_id);
    return true;
};

//Update order_detail
const update_order_detail = async (_id, totalPrice, amount, idOrder, idProduct) => {
    const order_detail_update = order_detail_model.findByIdAndUpdate(_id, { totalPrice, amount, idOrder, idProduct });
    return order_detail_update;
};

module.exports = {
    add_order_detail, get_order_detail_by_idOrder, get_order_detail_by_idProduct,
    delete_order_detail, update_order_detail, get_order_detail_by_id
};