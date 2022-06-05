const Utility = require("../services/utilityController");
const Product = require('../model/productModel');
const Shop = require('../model/shopsModel');

module.exports = {
  isLogin: (req, res, err) => {
    Utility.sendSuccess(req, res, {
      isLoggedIn: true,
    });
  },
  login: (req, res, err) => {
    if (req.body.username == "Shree" && req.body.password == "123@1998") {
      Utility.sendSuccess(req, res, {
        username: req.body.username,
        isLoggedIn: true,
      });
    } else {
      Utility.sendFailure(req, res, "invalid Username or password");
    }
  },
  addNewProduct: async (req,res,err)=>{
    try {
      const data = await Product.create(req.body);
      Utility.sendSuccess(req,res,data);
    } catch(e) {
      Utility.sendFailure(req,res,e.message);
    }
  },
  getProducts: async (req,res,err) => {
    try {
      if(Utility.isNotEmpty(req.query.id)) {
          const data = await Product.findOne({'_id':req.query.id});
          return Utility.sendSuccess(req,res,data);
          
      }
      const data = await Product.find(); // get all products
      Utility.sendSuccess(req,res,data);
    } catch (e) {
      Utility.sendFailure(req,res,e.message);
    }
  },
  updateProduct: async (req,res,err)=> {
    try {
      if(!Utility.isNotEmpty(req.query.id)) return Utility.sendFailure(req,res,'id not found');
      const shop = await Product.updateOne({'_id':req.query.id},{...req.body});
      Utility.sendSuccess(req,res,shop);
    } catch (e) {
      Utility.sendFailure(req,res,e.message);
    }
  },

  deleteById: async (req,res,err) => {
    try {
      const response = await Product.deleteOne({'_id':req.query.id});
      console.log(response);
      Utility.sendSuccess(req,res, response);
    } catch(e){
      Utility.sendFailure(res,res, e.message);
    }
  },

  addShop: async (req,res,err) =>{
   try {
     if (req.body.phone.length != 10){
      Utility.sendFailure(req,res,'error: please enter valid Phone Number')
     }
     const data = await Shop.create(req.body);
     Utility.sendSuccess(req,res,data);
   } catch (e) {
     Utility.sendFailure(req,res,e.message);
   }
  },

};