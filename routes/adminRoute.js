const express = require("express");
const adminController = require("../controller/adminController");
const authenticate = require('../services/auth_middleware')

const router = express.Router();


router.route('/register').post(adminController.register)
router.route("/isLogin").get(adminController.isLogin);
router.route("/accountLogin").post(adminController.login);
router.route('/addProduct').post(authenticate,adminController.addNewProduct);
router.route('/getProducts').get(authenticate,adminController.getProducts);
router.route('/deleteById').get(authenticate, adminController.deleteProductById);
router.route('/addShop').post(authenticate, adminController.addShop);
router.route('/updateProduct').post(authenticate,adminController.updateProduct);

module.exports = router;