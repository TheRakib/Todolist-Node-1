const express = require('express');
const router = express.Router();

const verifyUser = require("../middleware/verifyUser");
const {homeRender} = require('../controller/homeController');

router.get("/", homeRender);

module.exports = router;