const express = require("express");
const { registerAdmin, loginAdmin} = require("../../controllers/adminController/auth");
const { register, login } = require("../../controllers/userController/auth");

const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/admin-signup").post(registerAdmin);
router.route("/admin-login").post(loginAdmin);


module.exports = router;
