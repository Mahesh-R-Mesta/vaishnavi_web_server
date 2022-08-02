const mongoose = require('mongoose');

const ProductScheme = mongoose.Schema({
    company: String,
    productType:{
      type: String,
      default:''
    },
    productName:{
      type: String,
      required: [true,'Product Name is Required'],
    },
    price:{
      type: Number,
      required: [true, "Price is required"]
    },
    weight:{
      type: Number,
      default: 0
    },
    isAvailable:{
      type: Boolean,
      default: true
    }
   });

Product = mongoose.model('product', ProductScheme);

module.exports = Product;