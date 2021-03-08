const express = require('express');
const logoutRouter = express.Router();

const { signOut } = require("../controller/logoutController");

logoutRouter.get('/logout', signOut);

module.exports = logoutRouter;