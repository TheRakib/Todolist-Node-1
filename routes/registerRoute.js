const express = require("express");
const registerRouter = express.Router();

const verifyToken = require("../middleware/verifyUser");

const {registerRender, registerSubmit} = require("../controller/registerController");
registerRouter.get('/register', registerRender);
registerRouter.post('/register', registerSubmit);

module.exports = registerRouter;