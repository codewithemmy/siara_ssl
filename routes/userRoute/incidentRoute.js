const express = require("express");
const { postIncident } = require("../../controllers/userController/incident");

const router = express.Router();

const userAuth = require("../../userMiddleware/userMiddleware");

router.route("/post-incident").post(userAuth, postIncident);
module.exports = router;
