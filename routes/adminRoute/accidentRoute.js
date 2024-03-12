const express = require("express");
const { adminEditAccident, singleAccident, getAccident, deleteAccident, accidentStatus } = require("../../controllers/adminController/accident");

const router = express.Router();

const adminAuth = require("../../middleware/adminMiddleware");

router.route("/admin/update-accident/:id").patch(adminAuth, adminEditAccident);
router.route("/admin/single-accident/:id").get(adminAuth, singleAccident);
router.route("/admin/get-accident").get(adminAuth, getAccident);
router.route("/admin/delete-accident/:id").delete(adminAuth, deleteAccident);
router.route("/admin/accident-status/:id").patch(adminAuth, accidentStatus);

module.exports = router;
