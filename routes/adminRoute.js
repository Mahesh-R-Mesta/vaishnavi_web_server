const express = require("express");
const adminController = require("../controller/adminController");
const orderController = require("../controller/orderController")
const authenticate = require('../services/auth_middleware')
const shopController = require('../controller/shopController');

const router = express.Router();

//authentication
router.route('/register').post(adminController.register)
router.route("/isLogin").get(adminController.isLogin);
router.route("/accountLogin").post(adminController.login);
//products
router.route('/addProduct').post(authenticate,adminController.addNewProduct);
router.route('/getProducts').get(authenticate,adminController.getProducts);
router.route('/deleteById').get(authenticate, adminController.deleteProductById);
router.route('/updateProduct').post(authenticate,adminController.updateProduct);
//shops
router.route('/createShop').post(authenticate, shopController.addOrUpdateShop);
router.route('/getShop').get(authenticate, shopController.getShops);
router.route('/deleteStore').get(authenticate, shopController.deleteShopById)
router.route('/getStoreDetail').get(authenticate, shopController.getStoreDeatil)
//orders
router.route('/createOrder').post(authenticate,orderController.createOrder);

module.exports = router;