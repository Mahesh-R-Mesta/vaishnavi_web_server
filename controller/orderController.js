const OrderModel = require('../model/orderModel'); 
const ShopModel = require('../model/shopsModel');
const ProductModel = require('../model/productModel')
const Utility = require('../services/utilityController');

const orderController = {
    createOrder: async (req,res,err) =>{
        try {
            if(Utility.isNotEmpt(ProductModel.findOne({'_id':req.body.productId}))){
                return Utility.sendFailure(req,res,"Product not found")
            }
            const order = await OrderModel.create(req.body)
            return Utility.sendSuccess(req,res,order);
        } catch(e){
            return Utility.sendFailure(req,res,e.message);
        }
    },
    updateOrder: async (req,res,err)=>{
        try {

        } catch(e){

        }
    }
};


module.exports = orderController;
