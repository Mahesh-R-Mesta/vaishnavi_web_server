const mongoose = require('mongoose');


const ShopSchema = mongoose.Schema({
    shopName: {
        type: String,
        required: true,
        unique: true
    },
    owner: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: false,
        default:'none'
    },
    address: {
      
        district:{
            type: String,
        },
        city:{
           type: String,

        },
        area: {
           type: String,
           required: true
        },
        pinCode:{
           type: Number,
           required: true,
        },
    }
});


const ShopModel = mongoose.model('shops',ShopSchema);

module.exports = ShopModel;


