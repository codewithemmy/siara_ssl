const express = require("express");
const { postProduct } = require("../../controllers/userController/product");
// const auth = require("../middleware/authentication");

const router = express.Router();

const userAuth = require("../../userMiddleware/userMiddleware");

router.route("/post-product").post(userAuth, postProduct);

module.exports = router;
