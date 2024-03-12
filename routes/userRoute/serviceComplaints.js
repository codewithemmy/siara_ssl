const express = require("express");
const {
  postServiceComplaints,
} = require("../../controllers/userController/serviceComplaints");


const router = express.Router();

const userAuth = require("../../userMiddleware/userMiddleware");

router.route("/post-service-complaints").post(userAuth, postServiceComplaints);

module.exports = router;
