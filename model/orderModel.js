const mongoose = require('mongoose');

const schema = mongoose.Schema({
  shopId:{
    type: String,
    required: true
  },
  productId:{
    type: String,
    required:true
  },
  itemCount: {
    type:Number,
    required:[true,"item count required"],
    default: 1
  },
  totalAmount:{
    type: Number,
    required: [true,"total amount required"]
  },
  createdAt:{
    type: String,
    default: (new Date()).getTime(),
  }
})

const Orders = mongoose.model('orders',schema)

module.exports = Orders
