const express = require("express");
const { postHealth } = require("../../controllers/userController/health");


const router = express.Router();

const userAuth = require("../../userMiddleware/userMiddleware");

router.route("/post-health").post(userAuth, postHealth);

module.exports = router;
