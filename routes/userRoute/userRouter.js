const express = require("express");
const {
  getProfile,
  updateProfile,
  userImageUpload,
} = require("../../controllers/userController/profile");

const router = express.Router();

const userAuth = require("../../userMiddleware/userMiddleware");

router.route("/profile").get(userAuth, getProfile);
router.route("/update-profile").patch(userAuth, updateProfile);
router.route("/upload-image/:id").patch(userAuth, userImageUpload);

module.exports = router;
