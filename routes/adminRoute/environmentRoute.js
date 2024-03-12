const express = require("express");
const {
  adminEditEnvironment,
  deleteEnvironment,
  singleEnvironment,
  getEnvironment,
  environmentStatus,
} = require("../../controllers/adminController/environmental");

const router = express.Router();
const adminAuth = require("../../middleware/adminMiddleware");

router.route("/admin/update-environment/:id").patch(adminAuth, adminEditEnvironment);
router.route("/admin/single-environment/:id").get(adminAuth, singleEnvironment);
router.route("/admin/get-environment").get(adminAuth, getEnvironment);
router.route("/admin/delete-environment/:id").delete(adminAuth, deleteEnvironment);
router.route("/admin/environment-status/:id").patch(adminAuth, environmentStatus);

module.exports = router;
