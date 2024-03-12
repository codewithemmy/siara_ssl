const express = require("express");
const router = express.Router();
const { postSecurity } = require("../../controllers/userController/security");

const userAuth = require("../../userMiddleware/userMiddleware");

router.route("/post-security").post(userAuth, postSecurity);

module.exports = router;
