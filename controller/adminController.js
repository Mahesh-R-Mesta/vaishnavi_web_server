const Utility = require("../services/utilityController");
const Product = require('../../../vaishnavi_web_server/model/productModel');

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
  getAllProducts: async (req,res,err) => {
    try {
      const data = await Product.find(); // get all products
      Utility.sendSuccess(req,res,data);
    } catch (e) {
      Utility.sendFailure(req,res,e.message);
    }
  }
};
