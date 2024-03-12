const express = require("express");
const {
  getProfile,
  getSingleProfile,
} = require("../../controllers/adminController/profile");

const router = express.Router();

const adminAuth = require("../../middleware/adminMiddleware");

router.route("/admin/profile").get(adminAuth, getProfile);
router.route("/admin/profile/:id").get(adminAuth, getSingleProfile);

module.exports = router;
