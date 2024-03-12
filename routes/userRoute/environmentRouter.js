const express = require("express");
const {
  postEnvironment,
} = require("../../controllers/userController/environmental");

const router = express.Router();
const userAuth = require("../../userMiddleware/userMiddleware");

router.route("/post-environment").post(userAuth, postEnvironment);

module.exports = router;
