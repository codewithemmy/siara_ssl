const express = require("express");
const {
  adminEditEmergency,
  singleEmergency,
  getEmergency,
  deleteEmergency,
  emergencyStatus,
} = require("../../controllers/adminController/emergency");

const router = express.Router();

const adminAuth = require("../../middleware/adminMiddleware");

router.route("/admin/update-emergency/:id").patch(adminAuth, adminEditEmergency);
router.route("/admin/single-emergency/:id").get(adminAuth, singleEmergency);
router.route("/admin/get-emergency").get(adminAuth, getEmergency);
router.route("/admin/delete-emergency/:id").delete(adminAuth, deleteEmergency);
router.route("/admin/emergency-status/:id").patch(adminAuth, emergencyStatus);


module.exports = router;
