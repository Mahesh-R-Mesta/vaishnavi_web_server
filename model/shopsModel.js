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
        unique: true,
        validate:{
            validator:(num)=>{
                return String(num).length == 10;
            },
            message: props => `${props} is not valid number`
        }
    },
    email: {
        type: String,
        required: false,
        unique:true,
        validate:{
            validator:(email)=>{
               return email.includes("@") && email.includes(".")
            },
            message:(email)=> `${email} invalid email`
        }
    },
    updatedAt:{
        type: Number,
        default: Date.parse(new Date()),
        required:false
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
           required: false,
        },
    }
});


const ShopModel = mongoose.model('shops',ShopSchema);

module.exports = ShopModel;


