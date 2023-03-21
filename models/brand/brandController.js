const brand_service = require('../brand/brandService');

//Lay brand theo id
const get_brand = async (_idBrand) => {
    try {
        const brand = await brand_service.get_brand(_idBrand);
        return brand;
    } catch (error) {
        console.log('Error get brand: ' + error.message);
    }
};

// add brand
const add_brand = async (name, picture) => {
    try {
        const brand = await brand_service.add_brand(name, picture);
        return brand;
    } catch (error) {
        console.log('Error add brand: ' + error.message);
    }
};

module.exports = {
    add_brand, get_brand
};