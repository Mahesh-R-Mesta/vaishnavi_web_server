const Shop = require('../model/shopsModel');
const Utility = require('../services/utilityController');

module.exports = {
    addShop: async (req,res,err) =>{
        try {
          if (Utility.validNumber(req.body.phone)){
           Utility.sendFailure(req,res,'please enter valid phone number')
          }
          const data = await Shop.create(req.body);
          Utility.sendSuccess(req,res,data);
        } catch (e) {
          Utility.sendFailure(req,res,e.message);
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
}