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
    retailPrice:{
      type: Number,
      required: [true,"Retail Price is required"]
    },
    sellingPrice:{
      type:Number,
      required:[true,"Selling price required"]
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