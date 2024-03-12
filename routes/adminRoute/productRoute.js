const express = require("express");
const {
  updateProduct,
  getSingleProduct,
  getProduct,
  deleteProduct,
  productStatus,
} = require("../../controllers/adminController/product");

const router = express.Router();

const adminAuth = require("../../middleware/adminMiddleware");

router.route("/admin/update-product/:id").patch(adminAuth, updateProduct);
router.route("/admin/single-product/:id").get(adminAuth, getSingleProduct);
router.route("/admin/get-product").get(adminAuth, getProduct);
router.route("/admin/delete-product/:id").delete(adminAuth, deleteProduct);
router.route("/admin/product-status/:id").patch(adminAuth, productStatus);

module.exports = router;
