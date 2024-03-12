const express = require("express");
const {
  updateIncident,
  getSingleIncident,
  getIncident,
  deleteIncident,
  incidentStatus,
} = require("../../controllers/adminController/incident");

const router = express.Router();

const adminAuth = require("../../middleware/adminMiddleware");

router.route("/admin/update-incident/:id").patch(adminAuth, updateIncident);
router.route("/admin/single-incident/:id").get(adminAuth, getSingleIncident);
router.route("/admin/get-incident").get(adminAuth, getIncident);
router.route("/admin/delete-incident/:id").delete(adminAuth, deleteIncident);
router.route("/admin/incident-status/:id").patch(adminAuth, incidentStatus);

module.exports = router;
