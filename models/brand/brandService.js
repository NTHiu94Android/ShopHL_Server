const brand_model = require('../brand/brandModel');

//Lay brand theo id
const get_brand = async (_idBrand) => {
    const brand = await brand_model.findById(_idBrand);
    return brand;
};

// add brand
const add_brand = async (name, picture) => {
    const brand = new brand_model({ name, picture });
    await brand.save();
    return brand;
};

module.exports = {
    add_brand, get_brand
}

