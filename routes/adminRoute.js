const express = require("express");
const adminController = require("../controller/adminController");

const router = express.Router();

router.route("/isLogin").get(adminController.isLogin);
router.route("/accountLogin").post(adminController.login);
router.route('/addProduct').post(adminController.addNewProduct);
router.route('/getProducts').get(adminController.getProducts);
router.route('/deleteById').get(adminController.deleteById);
router.route('/addShop').post(adminController.addShop);
router.route('/updateProduct').post(adminController.updateProduct);

module.exports = router;