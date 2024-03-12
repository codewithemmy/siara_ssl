const express = require("express");
const { updateSecurity, getSingleSecurity, getSecurity, deleteSecurity, securityStatus } = require("../../controllers/adminController/security");
const router = express.Router();

const adminAuth = require("../../middleware/adminMiddleware");

router.route("/admin/update-security/:id").patch(adminAuth, updateSecurity);
router.route("/admin/single-security/:id").get(adminAuth, getSingleSecurity);
router.route("/admin/get-security").get(adminAuth, getSecurity);
router.route("/admin/delete-security/:id").delete(adminAuth, deleteSecurity);
router.route("/admin/security-status/:id").patch(adminAuth, securityStatus);

module.exports = router;
