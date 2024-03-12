const express = require("express");
const {
  postAccident,
} = require("../../controllers/userController/accident");
const router = express.Router();


const userAuth = require("../../userMiddleware/userMiddleware");


router.route("/post-accident").post(userAuth, postAccident);

module.exports = router;
