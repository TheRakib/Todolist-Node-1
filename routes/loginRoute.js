const express = require('express');
const loginRouter = express.Router();

const verifyUser = require("../middleware/verifyUser")

const {loginRender, loginSubmit} = require('../controller/loginController');

loginRouter.get('/login', loginRender);
loginRouter.post('/login', loginSubmit);

module.exports = loginRouter;