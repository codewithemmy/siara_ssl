const express = require("express");
const { adminEditHealth, singleHealth, getHealth, deleteHealth, healthStatus } = require("../../controllers/adminController/health");
const router = express.Router();

const adminAuth = require("../../middleware/adminMiddleware");

router.route("/admin/update-health/:id").patch(adminAuth, adminEditHealth);
router.route("/admin/single-health/:id").get(adminAuth, singleHealth);
router.route("/admin/get-health").get(adminAuth, getHealth);
router.route("/admin/delete-health/:id").delete(adminAuth, deleteHealth);
router.route("/admin/health-status/:id").patch(adminAuth, healthStatus);

module.exports = router;
