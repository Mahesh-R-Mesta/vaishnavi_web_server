const express = require("express");
const adminController = require("../controller/adminController");

const router = express.Router();

router.route("/isLogin").get(adminController.isLogin);
router.route("/accountLogin").post(adminController.login);
router.route('/addProduct').post(adminController.addNewProduct);
router.route('/allProducts').get(adminController.getAllProducts);


module.exports = router;
