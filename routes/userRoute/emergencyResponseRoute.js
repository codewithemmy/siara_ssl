const express = require("express");
const {
  postEmergency,
} = require("../../controllers/userController/emergencyResponse");


const router = express.Router();
const userAuth = require("../../userMiddleware/userMiddleware");


router.route("/post-emergency").post(userAuth, postEmergency);

module.exports = router;
