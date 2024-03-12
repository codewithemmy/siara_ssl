const express = require("express");
const { history } = require("../../controllers/userController/history");
// const auth = require("../middleware/authentication");

const router = express.Router();

const userAuth = require("../../userMiddleware/userMiddleware");


router.route("/history").get(userAuth, history);

module.exports = router;
