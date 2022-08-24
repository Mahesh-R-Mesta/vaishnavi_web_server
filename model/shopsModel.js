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
        required: [true,"Phone number required"],
        unique: true
    },
    email: {
        type: String,
        required: [false,"Email is required"],
        default:'none'
    },
    updatedAt:{
        type: Number,
        default: Date.parse(new Date)
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


