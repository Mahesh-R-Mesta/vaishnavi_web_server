const { query } = require('express');
const Shop = require('../model/shopsModel');
const Utility = require('../services/utilityController');

module.exports = {
    addOrUpdateShop: async (req,res,err) =>{
        try {
          if (Utility.validNumber(String(req.body.phone))){
           return Utility.sendFailure(req,res,'please enter valid phone number')
          }
          if(req.body.id!=null){
            const data = await Shop.findByIdAndUpdate(req.body.id,req.body);
            return Utility.sendSuccess(req,res,req.body);
          }
          const data = await Shop.create(req.body);
           Utility.sendSuccess(req,res,data);
           return;
        } catch (e) {
          return Utility.sendFailure(req,res,e);
        }
       },
    getShops: async (req,res,err) => {
        try {
          if(Utility.isNotEmpty(req.query.id)){
            const shop = await Shop.findOne({"_id":req.query.id});
            return Utility.sendSuccess(req,res,shop)
          }
          const shop = await Shop.find()
          Utility.sendSuccess(req,res,shop)
        } catch(e){
          Utility.sendFailure(req,res,e)
        }
      },
    deleteShopById: async (req,res,err)=>{
      try {
      const result = await Shop.findByIdAndDelete(req.query.id);
        const success = req.query.id == result._id;
        Utility.sendSuccess(req,res,{
          "status":success,
          "msg":success ? "Deleted Successfully":"Something went wrong"
        });
      } catch(e){
        Utility.sendFailure(req,res,e);
      }
    },
    getStoreDeatil: async (req,res,err) => {
      try {
        const data = await Shop.find({"_id":req.query.id});
        if(Utility.isNotEmpty(data) && data.length==1){
          Utility.sendSuccess(req,res,data[0])
        } else {
          Utility.sendFailure(req,res,"Shop Not Found")
        }
      } catch(e){
        Utility.sendFailure(req,res,e)
      }
    }
}