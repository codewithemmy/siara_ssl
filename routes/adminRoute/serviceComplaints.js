const express = require("express");
const {
  updateServiceComplaints,
  getSingleServiceComplaints,
  deleteServiceComplaints,
  getServiceComplaints,
  serviceComplaintsStatus,
} = require("../../controllers/adminController/serviceComplaints");

const router = express.Router();

const adminAuth = require("../../middleware/adminMiddleware");

router.route("/admin/update-complaints/:id").patch(adminAuth, updateServiceComplaints);
router.route("/admin/single-complaints/:id").get(adminAuth, getSingleServiceComplaints);
router.route("/admin/get-complaints").get(adminAuth, getServiceComplaints);
router.route("/admin/delete-complaints/:id").delete(adminAuth, deleteServiceComplaints);
router.route("/admin/complaints-status/:id").patch(adminAuth, serviceComplaintsStatus);

module.exports = router;
