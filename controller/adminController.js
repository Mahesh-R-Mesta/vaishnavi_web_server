const Utility = require("../services/utilityController");
const Product = require('../model/productModel');
const Shop = require('../model/shopsModel');
const Users = require('../model/usersModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


module.exports = {
  isLogin: (req, res, err) => {
    try {
    const auth_token = req.headers["authorization"]
    const token = auth_token.split(" ")[1]
    const user = jwt.verify(token,process.env.AUTH_TOKEN)
    if(!user) return Utility.sendAuthError(req,res)
    Utility.sendSuccess(req, res, {
      isLoggedIn: true,
      ...user
    });
  } catch(e){
    return Utility.sendFailure(req,res,e.message)
  }
  },

  register: async (req,res,err)=>{
    try {
      console.log(req.body)
    const {username, email, password} = req.body;
 
    if(!Utility.isNotEmpty(username) || !Utility.isNotEmpty(email) || !Utility.isNotEmpty(password)){
      return Utility.sendFailure(req,res,"Please enter the all fields");
    }
    const hashPassword = await bcrypt.hash(password,10)
     const user = await Users.findOne({username: username,email:email})
     if(user){
      return Utility.sendDuplicateError(req,res,"User already exists")
     }
     newUser = await Users.create({
      username: req.body.username,
      password: hashPassword,
      email: req.body.email
     });

     const token = jwt.sign(
      {user_id:newUser._id, email},
      process.env.AUTH_TOKEN)

     newUser.token = token
     
     Utility.sendSuccess(req,res,{
      ...req.body,
      message:"User account created",
      token:token
     })
    } catch (e){
      Utility.sendFailure(req,res,e.message);
    }
  },

  login: async (req, res, err) => {
    try {
      const {username,password} = req.body;
      const user = await Users.findOne({username: username})
      if(!user) return Utility.sendFailure(req, res, "User/password not found")
      const matched = await bcrypt.compare(password,user.password)
      console.log(matched)
      const token =  jwt.sign(
        {user_id:user._id,email:user.email},
        process.env.AUTH_TOKEN)
      console.log(token)
      if(matched){
        Utility.sendSuccess(req, res, {
          username: req.body.username,
          token:token,
          isLoggedIn: true,
        });
      } else {
        return Utility.sendFailure(req,res,"wrong password")
      }
    } catch(e){
      return Utility.sendFailure(req, res, "invalid Username or password");
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

  deleteProductById: async (req,res,err) => {
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

  getShops: async (req,res,err)=>{
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

  


};