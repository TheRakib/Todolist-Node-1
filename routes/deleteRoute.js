const express = require('express');
const deleteRouter = express.Router();

const {deleteRender} = require("../controller/deleteController.js")

deleteRouter.get('/delete/:id', deleteRender);

module.exports = deleteRouter;